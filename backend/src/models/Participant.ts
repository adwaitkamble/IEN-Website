import mongoose, { Schema, Document } from 'mongoose';

export interface IParticipant extends Document {
  name: string;
  email: string;
  phone: string;
  alternatePhone?: string;

  college: string;
  course: string;
  yearOfStudy: string;
  studentIdUrl: string;

  resumeUrl: string;
  primarySkill: string;
  otherSkills?: string;
  toolsKnown?: string;
  portfolioURL?: string;

  participationType: string;
  hackathonExperience: string;

  declarationName: string;
  declarationDate: Date;
  status: 'Pending' | 'Shortlisted' | 'Rejected';
  createdAt: Date;
}

const ParticipantSchema = new Schema<IParticipant>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: true },
  alternatePhone: { type: String },

  college: { type: String, required: true },
  course: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  studentIdUrl: { type: String, required: true },

  resumeUrl: { type: String, required: true },
  primarySkill: { type: String, required: true },
  otherSkills: { type: String },
  toolsKnown: { type: String },
  portfolioURL: { type: String },

  participationType: { type: String, required: true },
  hackathonExperience: { type: String, required: true },

  declarationName: { type: String, required: true },
  declarationDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'Shortlisted', 'Rejected'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

export const Participant = mongoose.model<IParticipant>('Participant', ParticipantSchema);
