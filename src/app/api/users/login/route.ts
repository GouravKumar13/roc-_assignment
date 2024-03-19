/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { Amiri_Quran } from "next/font/google";
import { env } from "process";

export async function POST(req: NextResponse) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await db.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return NextResponse.json(
        { error: "user does not exist" },
        { status: 400 },
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "password is incorrect" },
        { status: 400 },
      );
    }

    const tokenData = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {
      expiresIn: "1d",
    });

    const res = NextResponse.json({
      user: { name: user.name, email: user.email },
      message: "login success",
      success: true,
    });

    res.cookies.set("token", token, { httpOnly: true });

    return res;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
