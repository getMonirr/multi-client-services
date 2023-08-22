import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new SignJWT({ ...reqBody })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);

  // set jwt in cookies
  cookies().set({
    name: "multi-token",
    value: `Bearer ${jwt}`,
    secure: true,
    httpOnly: true,
  });

  return NextResponse.json({
    success: true,
    message: "Token created successfully",
  });
};
