import mongoose, { Schema, Document } from 'mongoose';

export interface IExamUser extends Document {
    studentId: string;
    passwordHash: string;
    createdAt: Date;
}

const ExamUserSchema = new Schema<IExamUser>({
    studentId: { type: String, required: true, unique: true, trim: true },
    passwordHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const ExamUser = mongoose.model<IExamUser>('ExamUser', ExamUserSchema);
