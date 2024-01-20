import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactFormData = {
  userName: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { userName, email, message }: ContactFormData = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NODEMAILER_EMAIL,
      subject: `UCTIT-Training : Message from ${userName}`,
      html: `
      <p>Hello,</p>
      <p>${message}</p>
      <p>Best Wishes,</p>
      <p>${email}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Error sending email" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
