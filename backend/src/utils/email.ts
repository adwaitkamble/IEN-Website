import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter: nodemailer.Transporter | null = null;

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail', // Or your preferred email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export const sendConfirmationEmail = async (
  leaderEmail: string,
  leaderName: string,
  teamName: string,
  ideaTitle: string,
  registrationId: string
) => {
  if (!transporter) {
    console.warn('Email transporter not configured. Skipping confirmation email.');
    return;
  }

  const mailOptions = {
    from: `"CIIL IEN PCCOE" <${process.env.EMAIL_USER}>`,
    to: leaderEmail,
    subject: 'Ennovate’X Registration Confirmed – CIIL, IEN PCCOE',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #1a1a1a; text-align: center;">Registration Confirmed</h2>
        <p>Dear ${leaderName},</p>
        <p>Your team <strong>${teamName}</strong> has been successfully registered for <strong>Ennovate’X</strong>.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Registration ID:</strong> ${registrationId}</p>
          <p style="margin: 5px 0;"><strong>Idea Title:</strong> ${ideaTitle}</p>
          <p style="margin: 5px 0;"><strong>Event:</strong> Ennovate’X</p>
          <p style="margin: 5px 0;"><strong>Conducted under:</strong> CIIL</p>
        </div>
        
        <p>We will review your application and get back to you with the shortlisting results soon.</p>
        <p>Best regards,<br><strong>CIIL Team</strong><br>IEN PCCOE</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${leaderEmail}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};
