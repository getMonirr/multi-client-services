import { handleError } from "@/middleware/errorMiddleware";
import {
  deleteUserById,
  getUserById,
  updateUserById,
} from "@/utils/database/userDatabase";
import { NextRequest, NextResponse } from "next/server";

type ParamsType = {
  params: {
    userId: string;
  };
};

// get single user by user id
export const GET = async (req: NextRequest, { params }: ParamsType) => {
  try {
    const userId = params?.userId;
    const user = await getUserById(userId);

    return NextResponse.json(user);
  } catch (error: any) {
    return handleError(error);
  }
};

// update a user information by user id
export const PATCH = async (req: NextRequest, { params }: ParamsType) => {
  try {
    const reqBody = await req.json();

    const userId = params?.userId;
    const updateDoc = { ...reqBody };

    const result = await updateUserById(userId, updateDoc);
    return NextResponse.json(result);
  } catch (error: any) {
    return handleError(error);
  }
};

// delete a user from data base
export const DELETE = async (req: NextRequest, { params }: ParamsType) => {
  try {
    const userId = params?.userId;
    const result = await deleteUserById(userId);
    return NextResponse.json(result);
  } catch (error: any) {
    return handleError(error);
  }
};
