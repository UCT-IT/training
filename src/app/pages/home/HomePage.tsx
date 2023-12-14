import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import HomeSlider from "@/app/components/Home/homeSlider/HomeSlider";
import Review from "@/app/components/Home/review/Review";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <HomeSlider />
      <Review />
    </React.Fragment>
  );
};

export default HomePage;
