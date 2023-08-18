import User from "@/models/usersModel";
import connectMongoDB from "@/utils/connectMongoDB";
import { getUserById, updateUserById } from "@/utils/database/userDatabase";
import { NextRequest, NextResponse } from "next/server";

// get single user by user id
export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const userId = params?.userId;
    const user = await getUserById(userId);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error });
  }
};

// update a user information by user id
export const PATCH = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const reqBody = await req.json();

    const userId = params?.userId;
    const updateDoc = { ...reqBody };

    const result = await updateUserById(userId, updateDoc);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
