import { strings } from "@/app/assets/locales/locales";
import FeaturedCourse from "@/app/components/Courses/FeaturedCourse/FeaturedCourse";
import HeroSection from "@/app/components/Courses/HeroSection/HeroSection";
import { Metadata } from "next";
import React from "react";
import AllCourses from "./allCourses/AllCourses";

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
