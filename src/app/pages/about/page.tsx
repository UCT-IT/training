import HeroSection from "@/app/components/about/HeroSection/HeroSection";
import History from "@/app/components/about/history/History";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <History />
    </React.Fragment>
  );
};

export default page;
