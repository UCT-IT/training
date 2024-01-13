import React from "react";
import MotionDivCircleOne from "./MotionDivs/MotionDivCircleOne";
import MotionDivCircleTwo from "./MotionDivs/MotionDivCircleTwo";
import { strings } from "@/app/assets/locales/locales";

const HeroSection = () => {
  const localeText = strings.courses.heroSection;
  return (
    <React.Fragment>
      <div className="bg-success relative z-10 overflow-hidden py-[130px]">
        <MotionDivCircleOne />
        <MotionDivCircleTwo />
        <div className="responsive-container text-center animate-fadeIn">
          <h1 className="text-5xl font-semibold text-tertiary md:leading-snug ">
            {localeText.title}
          </h1>
          <p className=" text-textColor text-lg py-3 md:py-5 md:whitespace-pre-line">
            {localeText.description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
