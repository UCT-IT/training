import FeaturedCourse from "@/app/components/Courses/FeaturedCourse/FeaturedCourse";
import HeroSection from "@/app/components/Courses/HeroSection/HeroSection";
import React from "react";

const CoursesPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <FeaturedCourse />
    </React.Fragment>
  );
};

export default CoursesPage;
