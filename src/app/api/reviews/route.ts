import {
  getReviews,
  getReviewsByEmail,
  postReview,
} from "@/controllers/review.controller";
import { handleError } from "@/middleware/errorMiddleware";
import { NextRequest, NextResponse } from "next/server";

// get all reviews or filter by email(email should provide with query)
export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    // filter by email
    if (email) {
      const filteredReview = await getReviewsByEmail(email);
      return NextResponse.json(filteredReview);
    }

    // get all review
    const reviews = await getReviews();

    return NextResponse.json(reviews);
  } catch (error: any) {
    return handleError(error);
  }
};

// post a review
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const result = await postReview(reqBody);
    return NextResponse.json(result);
  } catch (error: any) {
    return handleError(error);
  }
};
