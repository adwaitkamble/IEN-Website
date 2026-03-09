import { Request, Response } from "express";
import { Participant } from "../models/Participant.js";
import { sendEnnovatexConfirmation } from "../services/emailService.js";
import { uploadToCloudinary } from "../services/cloudinaryService.js";

/* ---------------- VALIDATORS ---------------- */

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidPhone = (phone: string) =>
  /^\d{10}$/.test(phone);

/* ---------------- REGISTER PARTICIPANT ---------------- */

export const registerParticipant = async (req: Request, res: Response) => {
  try {

    const {
      name,
      email,
      phone,
      alternatePhone,
      college,
      course,
      yearOfStudy,
      primarySkill,
      otherSkills,
      toolsKnown,
      portfolioURL,
      participationType,
      hackathonExperience,
      declarationName,
      declarationDate
    } = req.body;

    /* ---------------- GET FILES FROM MULTER ---------------- */

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };

    const studentFile = files?.studentIdProof?.[0];
    const resumeFile = files?.resume?.[0];

    /* ---------------- VALIDATION ---------------- */

    if (
      !name ||
      !email ||
      !phone ||
      !college ||
      !course ||
      !yearOfStudy ||
      !primarySkill ||
      !participationType ||
      !hackathonExperience ||
      !declarationName ||
      !declarationDate
    ) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    if (!studentFile || !resumeFile) {
      return res.status(400).json({
        message: "Student ID proof and Resume are required"
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({
        message: "Phone must be 10 digits"
      });
    }

    /* ---------------- UPLOAD TO CLOUDINARY ---------------- */

    const studentUpload = await uploadToCloudinary(
      studentFile.buffer,
      "ennovatex/studentIds"
    );

    const resumeUpload = await uploadToCloudinary(
      resumeFile.buffer,
      "ennovatex/resumes"
    );

    const studentIdUrl = (studentUpload as any).secure_url;
    const resumeUrl = (resumeUpload as any).secure_url;

    /* ---------------- CHECK DUPLICATE ---------------- */

    const existingParticipant = await Participant.findOne({
      email: email.toLowerCase()
    });

    if (existingParticipant) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    /* ---------------- SAVE PARTICIPANT ---------------- */

    const participant = new Participant({
      name,
      email: email.toLowerCase(),
      phone,
      alternatePhone,
      college,
      course,
      yearOfStudy,
      studentIdUrl,
      resumeUrl,
      primarySkill,
      otherSkills,
      toolsKnown,
      portfolioURL,
      participationType,
      hackathonExperience,
      declarationName,
      declarationDate: new Date(declarationDate)
    });

    await participant.save();

    /* ---------------- SEND EMAIL ---------------- */

    try {

      await sendEnnovatexConfirmation(
        name,
        email,
        college,
        participationType
      );

    } catch (emailError) {

      console.log("Email failed but registration saved");

    }

    /* ---------------- RESPONSE ---------------- */

    res.status(201).json({
      message: "Registration successful",
      registrationId: participant._id
    });

  } catch (error) {

    console.error("Registration error:", error);

    res.status(500).json({
      message: "Internal server error during registration"
    });

  }
};

/* ---------------- CHECK STATUS ---------------- */

export const checkStatus = async (req: Request, res: Response) => {

  try {

    const { email } = req.params;

    if (!isValidEmail(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    const registration = await Participant.findOne({
      email: email.toLowerCase()
    });

    if (!registration) {
      return res.status(404).json({
        message: "Registration not found"
      });
    }

    res.json({
      name: registration.name,
      status: "Registered",
      submittedAt: registration.createdAt
    });

  } catch (error) {

    console.error("Status check error:", error);

    res.status(500).json({
      message: "Internal server error"
    });

  }

};