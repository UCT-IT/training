import React from "react";
import MotionDivOne from "./MotionDivs/MotionDivCircleOne";
import MotionDivTwo from "./MotionDivs/MotionDivCircleTwo";
import MotionDivThree from "./MotionDivs/MotionDivImage";
import MotionDivFour from "./MotionDivs/MotionDivHeroBg";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";
import Link from "next/link";

const HeroSection = () => {
  const localeText = strings.home.heroSection;
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden">
        <MotionDivOne />
        <MotionDivFour />
        <MotionDivTwo />
        <div className="responsive-container lg:flex justify-between items-center py-[70px] lg:py-[127px]">
          <div className="text-center lg:text-left font-kumbh">
            <div className="animate-fadeIn space-y-5">
              <h1 className="text-6xl font-semibold text-secondary whitespace-pre-line">
                {localeText.title}
              </h1>
              <p className="text-tertiary py-5 whitespace-pre-line">
                {localeText.description}
              </p>
              <div className="flex flex-col md:flex-row justify-center lg:justify-normal items-center gap-5">
                <Link className="w-full md:w-auto" href="/courses">
                  <Button text={localeText.btnText1} variant="primary" />
                </Link>
                <Link className="w-full md:w-auto" href="/about">
                  <Button text={localeText.btnText2} variant="secondary" />
                </Link>
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
