import { NextResponse } from "next/server";

export function middleware(req: Response) {
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const token = req.cookies.get("token")?.value;
  console.log(token, "token");
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // if (token) {
  //
  // } else {
  //   return NextResponse.redirect(new URL("/login", req.nextUrl));
  // }
}

export const config = {
  matcher: ["/", "/otp", "/signup", "/login"],
};
