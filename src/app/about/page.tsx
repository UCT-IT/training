import { strings } from "@/app/assets/locales/locales";
import { Metadata } from "next";
import React from "react";
import HeroSection from "./About/HeroSection/HeroSection";
import Banner from "./About/banner/Banner";
import Values from "./About/values/Values";
import History from "./About/history/History";

const localeText = strings.metadata.aboutPage;

export const metadata: Metadata = {
  title: localeText.title,
  description: localeText.description,
};

const AboutPage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Banner />
      <Values />
      <History />
    </React.Fragment>
  );
};

export default AboutPage;
