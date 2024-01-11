import { strings } from "@/app/assets/locales/locales";
import HeroSection from "@/app/components/About/HeroSection/HeroSection";
import Banner from "@/app/components/About/banner/Banner";
import History from "@/app/components/About/history/History";
import Values from "@/app/components/About/values/Values";
import { Metadata } from "next";
import React from "react";

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
