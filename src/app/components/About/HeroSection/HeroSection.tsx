import React from "react";
import MotionDivCircleTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivCircleOne from "./MotionDivs/MotionDivCircleOne";
import { strings } from "@/app/assets/locales/locales";
import Button from "../../common/Buttons/Button";

const HeroSection = () => {
  const localeText = strings.about.heroSection;
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden py-[200px]">
        <MotionDivCircleOne />
        <MotionDivCircleTwo />
        <div className="responsive-container animate-fadeIn">
          <div className="lg:flex justify-between text-center lg:text-left lg:whitespace-pre-line">
            <h1 className="text-3xl md:text-6xl font-semibold text-secondary md:leading-snug font-newsreader">
              {localeText.title}
            </h1>
            <p className="font-kumbh text-textColor md:text-lg py-5">
              {localeText.description}
            </p>
          </div>
          <div className="pt-8">
            <div className="md:text-center lg:text-left">
              <Button text={localeText.btnText} variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
