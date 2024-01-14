import React from "react";
import { Metadata } from "next";
import { strings } from "@/app/assets/locales/locales";
import HomePage from "./home/HomePage";

const localeText = strings.metadata.homePage;

export const metadata: Metadata = {
  title: localeText.title,
  description: localeText.description,
};

const MainPage = () => {
  return <HomePage />;
};

export default MainPage;
