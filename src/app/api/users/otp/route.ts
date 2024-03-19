/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const mailer = async (email: string, verificationCode: number) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.NodeMailer_Email,
      pass: process.env.NodeMailer_Password,
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates
    },
  });
  let info = await transporter.sendMail({
    from: "roc8",
    to: email,
    subject: "Verification Code for roc8",
    text: `Your verification code is ${verificationCode}`,
  });
  console.log(info);
};

export async function POST(req: NextResponse) {
  const reqBody = await req.json();
  const { email } = reqBody;
  console.log(email, typeof email);
  try {
    // const reqBody = await req.json();
    // const { email } = reqBody;
    if (!email) {
      return NextResponse.json({ error: "enter" });
    }
    const verificationCode = Math.floor(10000000 + Math.random() * 90000000);
    await mailer(email, verificationCode);

    return NextResponse.json({ verificationCode, status: "success" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
