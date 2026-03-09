import mongoose, { Schema, Document } from 'mongoose';

export interface IMember {
  fullName: string;
  email: string;
  phone: string;
  branch: string;
  year: string;
  ideaTitle: string;
  problemStatement: string;
  ideaDescription: string;
  previousStartupExperience: boolean;
  linkedinOrPortfolio?: string;
  eventName: string;
  conductedUnder: string;
}

export interface ITeamRegistration extends Document {
  teamName: string;
  teamSize: number;
  leader: {
    fullName: string;
    email: string;
    phone: string;
    branch: string;
    year: string;
    college: string;
  };
  members: IMember[];
  status: 'Pending' | 'Shortlisted' | 'Rejected';
  createdAt: Date;
}

const MemberSchema = new Schema<IMember>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  ideaTitle: { type: String, required: true },
  problemStatement: { type: String, required: true },
  ideaDescription: { type: String, required: true },
  previousStartupExperience: { type: Boolean, default: false },
  linkedinOrPortfolio: { type: String },
  eventName: { type: String, default: 'EnnovateX' },
  conductedUnder: { type: String, default: 'CIIL' }
});

const TeamRegistrationSchema = new Schema<ITeamRegistration>({
  teamName: { type: String, required: true, trim: true },
  teamSize: { type: Number, required: true, min: 4, max: 5 },
  leader: {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    college: { type: String, required: true }
  },
  members: { 
    type: [MemberSchema], 
    required: true,
    validate: [
      function(this: ITeamRegistration, val: IMember[]) {
        return val.length + 1 === this.teamSize;
      },
      'Team size must match the number of members including the leader.'
    ]
  },
  status: {
    type: String,
    enum: ['Pending', 'Shortlisted', 'Rejected'],
    default: 'Pending'
  },
  createdAt: { type: Date, default: Date.now }
});

export const TeamRegistration = mongoose.model<ITeamRegistration>('TeamRegistration', TeamRegistrationSchema);
