import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import Category from "@/app/components/Home/category/Category";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Category />
    </React.Fragment>
  );
};

export default HomePage;
