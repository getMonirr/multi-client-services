import { NextResponse } from "next/server";

export const handleError = (error: any) => {
  return NextResponse.json(error);
};
