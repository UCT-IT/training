import ContactUs from "@/app/components/Home/ContactUs/ContactUs";
import HeroSection from "@/app/components/Home/HeroSection/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
