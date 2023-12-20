"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";

const MotionTitle = () => {
  const localeText = strings.home.aboutSection;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-secondary text-4xl mb-4 font-semibold font-newsreader ">
        {localeText.title}
      </h2>
      <p className="font-kumbh text-textColor text-lg leading-6 whitespace-pre-line">
        {localeText.description}
      </p>
    </motion.div>
  );
};

export default MotionTitle;
