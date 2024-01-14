import { strings } from "@/app/assets/locales/locales";

import { Metadata } from "next";
import React from "react";
import AllCourses from "./allCourses/AllCourses";
import HeroSection from "./Courses/HeroSection/HeroSection";
import FeaturedCourse from "./Courses/FeaturedCourse/FeaturedCourse";

const localeText = strings.metadata.coursesPage;

export const metadata: Metadata = {
  title: localeText.title,
  description: localeText.description,
};

const CoursesPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <FeaturedCourse />
      <AllCourses />
    </React.Fragment>
  );
};

export default CoursesPage;
