import { NextResponse } from "next/server";

export const middleware = async (req, Request) => {
  // Javascript
  await new Promise((resolve) =>setInterval(resolve, 1000));
return NextResponse.redirect(new URL("/", req.url));
};

export const config = {
    matcher: ["/info/:path*"]
    };