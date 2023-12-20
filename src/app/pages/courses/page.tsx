import HeroSection from "@/app/components/Courses/HeroSection/HeroSection";
import React from "react";
import AllCourses from "./allCourses/AllCourses";

const CoursesPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AllCourses />
    </React.Fragment>
  );
};

export default CoursesPage;
