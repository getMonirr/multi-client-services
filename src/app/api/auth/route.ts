import { createJWT } from "@/utils/createJWT";
import { setTokenInCookies } from "@/utils/setTokenInCookies";

import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  // create jwt token
  const jwt = await createJWT(reqBody);

  // set jwt in cookies
  await setTokenInCookies(jwt);

  return NextResponse.json({
    success: true,
    message: "Token created successfully",
  });
};
