import ContactUs from "@/app/components/Home/ContactUs/ContactUs";
import About from "@/app/components/Home/About/About";
import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import Category from "@/app/components/Home/category/Category";
import React from "react";
import HomeSlider from "@/app/components/Home/homeSlider/HomeSlider";
import Review from "@/app/components/Home/review/Review";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <HomeSlider />
      <About />
      <Category />
      <Review />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
