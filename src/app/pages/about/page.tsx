

import HeroSection from "@/app/components/about/HeroSection/HeroSection";
import History from "@/app/components/about/history/History";
import HeroSection from "@/app/components/About/HeroSection/HeroSection";
import Banner from "@/app/components/About/banner/Banner";
import React from "react";

const AboutPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Banner />
      <History />
    </React.Fragment>
  );
};

export default AboutPage;
