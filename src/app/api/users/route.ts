import {
  getAllUser,
  getUserByEmail,
  postUser,
} from "@/controllers/users.controller";
import { handleError } from "@/middleware/errorMiddleware";
import { NextRequest, NextResponse } from "next/server";

// get all user from database
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("email");

  try {
    if (userEmail) {
      const user = await getUserByEmail(userEmail);
      if (!user) return handleError({ error: "User not found" });

      return NextResponse.json({ success: true, data: user });
    }

    const users = await getAllUser();
    return NextResponse.json({ success: true, data: users });
  } catch (error: any) {
    return handleError(error);
  }
};

// post or save a user in database
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const result = await postUser(reqBody);
    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    return handleError(error);
  }
};
