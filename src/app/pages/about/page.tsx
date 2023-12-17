import HeroSection from "@/app/components/About/HeroSection/HeroSection";
import Banner from "@/app/components/About/banner/Banner";
import Values from "@/app/components/About/values/Values";
import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Banner />
      <Values />
    </React.Fragment>
  );
};

export default AboutPage;
