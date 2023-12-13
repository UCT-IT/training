import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import HomeSlider from "@/app/components/homeSlider/HomeSlider";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <HomeSlider />
    </React.Fragment>
  );
};

export default HomePage;
