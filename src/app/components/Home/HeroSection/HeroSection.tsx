import React from "react";
import MotionDivOne from "./MotionDivs/MotionDivCircleOne";
import MotionDivTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivThree from "./MotionDivs/MotionDivImage";
import MotionDivFour from "./MotionDivs/MotionDivHeroBg";
import { strings } from "@/app/assets/locales/locales";
import Button from "../../common/Buttons/Button";

const HeroSection = () => {
  const localeText = strings.home.heroSection;
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden">
        <MotionDivOne />
        <MotionDivFour />
        <MotionDivTwo />
        <div className="responsive-container lg:flex justify-center items-center py-[70px] lg:py-[127px]">
          <div className="space-y-5 text-center lg:text-left">
            <div className="animate-fadeIn">
              <h1 className="text-6xl font-semibold text-secondary font-newsreader">
                {localeText.title}
              </h1>
              <p className="font-kumbh text-tertiary py-5">
                {localeText.description}
              </p>
              <div className="space-y-6 md:space-x-6">
                <Button text={localeText.btnText1} variant="primary" />
                <Button text={localeText.btnText2} variant="secondary" />
              </div>
            </div>
          </div>
          <MotionDivThree />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
