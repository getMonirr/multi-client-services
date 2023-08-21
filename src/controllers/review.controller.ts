import Review from "@/models/review.model";
import connectMongoDB from "@/utils/connectMongoDB";

// post or add a review in DB
export const postReview = async (reviewData: Object) => {
  await connectMongoDB();
  const newReview = new Review({
    ...reviewData,
  });
  return newReview.save();
};

// get all reviews. latest reviews comes first
export const getReviews = async () => {
  // connect to DB
  await connectMongoDB();
  return Review.find({}).sort({ reviewDate: -1 });
};

// get reviews by email
export const getReviewsByEmail = async (email: string) => {
  // connect to DB
  await connectMongoDB();

  const reviews = await Review.find({
    $or: [{ "reviewer.email": email }, { "reviewedEntity.email": email }],
  }).sort({ reviewDate: -1 });

  return reviews;
};
