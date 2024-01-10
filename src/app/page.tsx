import HomePage from "./pages/home/HomePage";
import React from "react";
import { Metadata } from "next";
import { strings } from "@/app/assets/locales/locales";

const localeText = strings.metadata.homePage;

export const metadata: Metadata = {
  title: localeText.title,
  description: localeText.description,
};

const MainPage = () => {
  return <HomePage />;
};

export default MainPage;
