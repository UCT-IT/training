"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";

const MotionDivTexts = () => {
  const localeText = strings.courses.heroSection;

  const animationContent = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: 0.1, type: "spring" },
    },
  };

  return (
    <React.Fragment>
      <div className="responsive-container text-center">
        <motion.h1
          variants={animationContent}
          initial="hidden"
          animate="show"
          className="text-5xl font-semibold text-tertiary md:leading-snug font-newsreader"
        >
          {localeText.title}
        </motion.h1>
        <motion.p
          variants={animationContent}
          initial="hidden"
          animate="show"
          className="font-kumbh text-textColor text-lg py-3 md:py-5 md:whitespace-pre-line"
        >
          {localeText.description}
        </motion.p>
      </div>
    </React.Fragment>
  );
};

export default MotionDivTexts;
