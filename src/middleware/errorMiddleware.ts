import { NextResponse } from "next/server";

export const handleError = (error: Error) => {
  return NextResponse.json({ error: error.message });
};
