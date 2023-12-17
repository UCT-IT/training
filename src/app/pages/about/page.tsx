export default page;
import HeroSection from "@/app/components/About/HeroSection/HeroSection";
 import Banner from '@/app/components/about/banner/Banner';
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Banner />
    </React.Fragment>
  );
};

export default page;
