import React from "react";
import SellerSingleReview from "./SellerSingleReview";

const SellerReviews = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Reviews</h2>
      <div className="divide-y space-y-8">
        <SellerSingleReview />
        <SellerSingleReview />
        <SellerSingleReview />
        <SellerSingleReview />
      </div>
    </div>
  );
};

export default SellerReviews;
