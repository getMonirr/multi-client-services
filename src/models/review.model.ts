import { Schema, model, models } from "mongoose";

// review schema property will be update with requirement

const reviewSchema = new Schema({
  // who provide review
  reviewer: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  // reviewed person
  reviewedEntity: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  // which services being reviewed
  product: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  // auto create review date
  reviewDate: {
    type: Date,
    default: Date.now(),
  },
  feedback: {
    type: String,
    required: true,
  },
});

const Review = models.Reviews || model("Reviews", reviewSchema);

export default Review;
