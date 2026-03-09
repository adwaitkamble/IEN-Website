import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { Participant } from '../models/Participant.js';

const ALLOWED_STATUSES = ['Pending', 'Shortlisted', 'Rejected'] as const;
type RegistrationStatus = (typeof ALLOWED_STATUSES)[number];

const csvEscape = (value: unknown): string => {
  const str = value == null ? '' : String(value);
  const escaped = str.replace(/"/g, '""');
  return `"${escaped}"`;
};

const csvSanitizeCell = (value: unknown): string => {
  const str = value == null ? '' : String(value);
  if (/^[=+\-@]/.test(str)) {
    return `'${str}`;
  }
  return str;
};

/* ===========================
   ADMIN LOGIN
=========================== */

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminHash = process.env.ADMIN_PASSWORD_HASH;
    const jwtSecret = process.env.JWT_SECRET;

    if (!adminEmail || !adminHash || !jwtSecret) {
      return res.status(500).json({ message: 'Admin credentials not configured on server' });
    }

    if (email !== adminEmail) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, adminHash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: adminEmail },
      jwtSecret,
      { expiresIn: '12h' }
    );

    return res.json({ token, message: 'Login successful' });

  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/* ===========================
   GET ALL REGISTRATIONS
=========================== */

export const getAllRegistrations = async (req: Request, res: Response) => {
  try {
    const { status, search } = req.query;

    const query: Record<string, unknown> = {};

    if (
      typeof status === 'string' &&
      ALLOWED_STATUSES.includes(status as RegistrationStatus)
    ) {
      query.status = status;
    }

    if (typeof search === 'string' && search.trim()) {
      query.$or = [
        { name: { $regex: search.trim(), $options: 'i' } },
        { email: { $regex: search.trim(), $options: 'i' } }
      ];
    }

    const registrations = await Participant
      .find(query)
      .sort({ createdAt: -1 });

    return res.json(registrations);

  } catch (error) {
    console.error('Get registrations error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/* ===========================
   UPDATE PARTICIPANT STATUS
=========================== */

export const updateTeamStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid registration ID' });
    }

    if (
      typeof status !== 'string' ||
      !ALLOWED_STATUSES.includes(status as RegistrationStatus)
    ) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const registration = await Participant.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    return res.json({
      message: `Participant status updated to ${status}`,
      registration
    });

  } catch (error) {
    console.error('Update status error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

/* ===========================
   EXPORT CSV
=========================== */

export const exportRegistrations = async (_req: Request, res: Response) => {
  try {
    const registrations = await Participant.find().lean();

    if (!registrations || registrations.length === 0) {
      return res.status(404).json({ message: 'No registrations found to export' });
    }

    const headers = [
      'Registration ID',
      'Name',
      'Email',
      'Phone',
      'Alternate Phone',
      'College',
      'Course',
      'Year of Study',
      'Primary Skill',
      'Participation Type',
      'Status',
      'Registration Date'
    ];

    let csvContent = headers.join(',') + '\n';

    registrations.forEach((reg: any) => {
      const row = [
        csvEscape(reg._id),
        csvEscape(csvSanitizeCell(reg.name)),
        csvEscape(csvSanitizeCell(reg.email)),
        csvEscape(csvSanitizeCell(reg.phone)),
        csvEscape(csvSanitizeCell(reg.alternatePhone)),
        csvEscape(csvSanitizeCell(reg.college)),
        csvEscape(csvSanitizeCell(reg.course)),
        csvEscape(csvSanitizeCell(reg.yearOfStudy)),
        csvEscape(csvSanitizeCell(reg.primarySkill)),
        csvEscape(csvSanitizeCell(reg.participationType)),
        csvEscape(reg.status || 'Pending'),
        csvEscape(new Date(reg.createdAt).toISOString())
      ];

      csvContent += row.join(',') + '\n';
    });

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=ennovatex_participants.csv'
    );

    return res.status(200).send(`\uFEFF${csvContent}`);

  } catch (error) {
    console.error('Export error:', error);
    return res.status(500).json({
      message: 'Internal server error during export'
    });
  }
};