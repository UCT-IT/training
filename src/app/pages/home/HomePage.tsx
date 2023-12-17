import ContactUs from "@/app/components/Home/ContactUs/ContactUs";
import About from "@/app/components/Home/About/About";
import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import Category from "@/app/components/Home/category/Category";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <About />
      <Category />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
