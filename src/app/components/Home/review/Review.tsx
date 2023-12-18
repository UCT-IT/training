import React from "react";
import MotionReviewArrow from "./motionContent/MotionReviewArrow";
import MotionReviewTitle from "./motionContent/MotionReviewTitle";
import MotionReviewCarousel from "./motionContent/MotionReviewCarousel";
import MotionReivewNumbers from "./motionContent/MotionReviewNumbers";
import MotionReviewButton from "./motionContent/MotionReviewButton";

const Review = () => {
  return (
    <div className="bg-[#F9FAFB] font-kumbh relative py-44 ">
      <div className="container mx-auto">
        <MotionReviewArrow />
        <MotionReviewTitle />
        <MotionReviewCarousel />
        <MotionReivewNumbers />
        <MotionReviewButton />
      </div>
    </div>
  );
};

export default Review;
