import ContactUs from "@/app/components/Home/ContactUs/ContactUs";
import About from "@/app/components/Home/About/About";
import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <About />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
