import React from "react";
import MotionDivCircleTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivCircleOne from "./MotionDivs/MotionDivCircleOne";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden py-[200px]">
        <MotionDivCircleOne />
        <MotionDivCircleTwo />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
