import React from "react";
import MotionTitle from "./MotionAbout/MotionTitle";
import MotionImageAndDescription from "./MotionAbout/MotionImageAndDescription";
import MotionButton from "./MotionAbout/MotionButton";

const About = () => {
  return (
    <div className="responsive-container py-[184px]">
      <MotionTitle />
      <MotionImageAndDescription />
      <MotionButton />
    </div>
  );
};

export default About;
