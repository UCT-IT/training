import React from "react";
import MotionDivCircleOne from "./MotionDivs/MotionDivCircleOne";
import MotionDivCircleTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivTexts from "./MotionDivs/MotionDivTexts";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="bg-success relative z-10 overflow-hidden py-[130px]">
        <MotionDivCircleOne />
        <MotionDivCircleTwo />
        <MotionDivTexts />
      </div>
    </React.Fragment>
  );
};

export default HeroSection;