import React from "react";
import MotionTitle from "./motionContents/MotionTitle";
import MotionCard from "./motionContents/MotionCard";

const Category = () => {
  return (
    <div className="responsive-container py-28">
      <hr className="mb-28" />
      <MotionTitle />
      <MotionCard />
    </div>
  );
};

export default Category;
