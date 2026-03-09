import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

console.log("EMAIL USER:", process.env.EMAIL_USER);
console.log("EMAIL PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEnnovatexConfirmation = async (
  name: string,
  email: string,
  college: string,
  participationType: string
) => {

  const mailOptions = {
    from: `"Innovation & Entrepreneurship Network" <${process.env.EMAIL_USER}>`,
    to: email,
    cc: "ien.pccoe@gmail.com",
    subject: "ENNOVATE'X Registration Confirmation",

    text: `Hello ${name},

Your registration for ENNOVATE'X has been successfully received.

Event: ENNOVATE'X – Innovation & Entrepreneurship Event
Organizer: Innovation & Entrepreneurship Network (IEN), PCCOE

Submitted Details:
Name: ${name}
Email: ${email}
College: ${college}
Participation Type: ${participationType}

We will review your application and contact you soon.

For queries contact:
ien.pccoe@gmail.com

Best Regards,
Innovation & Entrepreneurship Network
PCCOE`
  };

  try {

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    console.log("Message ID:", info.messageId);

  } catch (error) {

    console.error("Email failed but registration continues:", error);

  }

};