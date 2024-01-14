import React from "react";
import HeroSection from "./Home/HeroSection/HeroSection";
import HomeSlider from "./Home/homeSlider/HomeSlider";
import About from "./Home/About/About";
import Category from "./Home/category/Category";
import Review from "./Home/review/Review";
import ContactUs from "./Home/ContactUs/ContactUs";

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
