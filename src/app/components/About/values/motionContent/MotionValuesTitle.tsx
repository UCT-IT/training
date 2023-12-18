"use client"
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";

const MotionValuesTitle = () => {
  const localeText = strings.about.values;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h1 className="text-white font-bold text-5xl  text-center">
        {localeText.title}
      </h1>
      <p className="text-white text-center mt-7 leading-7 font-medium text-[18px]">
        {localeText.description}
      </p>
    </motion.div>
  );
};

export default MotionValuesTitle;
