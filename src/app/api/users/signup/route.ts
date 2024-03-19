/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();
    const { name, email, password } = reqBody;

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      newUser,
      status: 201,
    });
  } catch (error:any) {
    NextResponse.json({ error: error.message, status: 400 });
  }
}
