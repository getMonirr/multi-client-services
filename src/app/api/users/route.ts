import { handleError } from "@/middleware/errorMiddleware";
import User from "@/models/usersModel";
import connectMongoDB from "@/utils/connectMongoDB";
import { NextRequest, NextResponse } from "next/server";

// get all user from database
export const GET = async () => {
  try {
    await connectMongoDB();
    const dd = "middleware";

    const result = await User.find({});
    return NextResponse.json(result);
  } catch (error: any) {
    return handleError(error);
  }
};

// post or save a user in database
export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();

    const reqBody = await req.json();

    const newUser = new User({
      ...reqBody,
    });
    const result = await newUser.save();

    return NextResponse.json(result);
  } catch (error: any) {
    return handleError(error);
  }
};
