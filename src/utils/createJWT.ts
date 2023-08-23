import { SignJWT } from "jose";

export const createJWT = async (data: object) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new SignJWT({ ...data })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);

  return jwt;
};
