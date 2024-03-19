/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
  try {
    const res = NextResponse.json({
      message: "logout Successfully",
      success: true,
    });

    res.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return res;
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}
