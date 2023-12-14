"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";
const BannerTittle = () => {
  const localeText = strings.about.banner;
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-primary font-newsreader text-5xl font-bold whitespace-pre-line"
    >
     {localeText.title}
    </motion.h1>
  );
};

export default BannerTittle;
