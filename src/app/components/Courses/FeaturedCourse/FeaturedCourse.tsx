import React from "react";
import MotionArrow from "./MotionDivs/MotionArrow";
import MotionCard from "./MotionDivs/MotionCard";
import { strings } from "@/app/assets/locales/locales";

const FeaturedCourse = () => {
  const localeText = strings.courses.featuredCourse;
  return (
    <React.Fragment>
      <div className="my-40 relative responsive-container">
        <MotionArrow />
        <h1 className="mb-8 text-center font-bold text-secondary text-3xl">
          {localeText.heading}
        </h1>
        <MotionCard />
      </div>
    </React.Fragment>
  );
};

export default FeaturedCourse;
