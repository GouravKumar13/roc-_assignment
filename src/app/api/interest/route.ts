/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { db } from "@/server/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // const url = new URL(req.url);
    // const searchParam = new URLSearchParams(url.searchParams);
    // const skip = JSON.parse(searchParam.get("skip") ?? "0");

    const products = await db.product.findMany();

    return NextResponse.json({ products });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
