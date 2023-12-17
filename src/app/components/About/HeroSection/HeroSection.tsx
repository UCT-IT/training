import React from "react";
import MotionDivCircleTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivTexts from "./MotionDivs/MotionDivTexts";
import MotionDivCircleOne from "./MotionDivs/MotionDivCircleOne";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden py-[200px]">
        <MotionDivCircleOne />
        <MotionDivCircleTwo />
        <MotionDivTexts />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
