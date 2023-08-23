import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (request: NextRequest) => {
  try {
    let cookie = request.cookies.get("multi-token")?.value;
    // if cookie is
    if (!cookie) {
      throw new Error("Invalid token");
    }

    // if cookie
    // verify token
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = cookie.split("Bearer ")[1];

    const result = await jwtVerify(token, secret);
    if (result?.payload) {
      return NextResponse.next();
    } else {
      throw new Error("Invalid token re");
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

// in this matcher array, all routes will be private routes
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
