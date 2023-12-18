import React from "react";
import MotionDivOne from "./MotionDivs/MotionDivCircleOne";
import MotionDivTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivThree from "./MotionDivs/MotionDivImage";
import MotionDivFour from "./MotionDivs/MotionDivHeroBg";
import TextContents from "./MotionDivs/TextContents";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden">
        <MotionDivOne />
        <MotionDivFour />
        <MotionDivTwo />
        <div className="responsive-container lg:flex justify-center items-center py-[70px] lg:py-[127px]">
          <div className="space-y-5 text-center lg:text-left">
            <TextContents />
          </div>
          <MotionDivThree />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
