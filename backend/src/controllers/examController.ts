import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { ExamUser } from '../models/ExamUser.js';

export const examLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { studentId, password } = req.body;

        if (!studentId || !password) {
            res.status(400).json({ success: false, message: 'Student ID and password are required' });
            return;
        }

        // Check if the user already exists
        let user = await ExamUser.findOne({ studentId });

        if (!user) {
            // If user doesn't exist, treat this as a "sign up" and create them.
            const passwordHash = await bcrypt.hash(password, 10);
            user = new ExamUser({ studentId, passwordHash });
            await user.save();

            res.status(201).json({
                success: true,
                message: 'Account created and logged in successfully',
                user: { id: user._id, studentId: user.studentId }
            });
            return;
        }

        // If user exists, verify password
        const isMatch = await bcrypt.compare(password, user.passwordHash);

        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid Student ID or Password' });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            user: { id: user._id, studentId: user.studentId }
        });

    } catch (error) {
        console.error('Error in exam login:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
