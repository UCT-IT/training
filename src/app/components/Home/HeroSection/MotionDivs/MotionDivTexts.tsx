"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";

const MotionDivTexts = () => {
  const localeText = strings.home.heroSection;

  const animationContent = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.1, type: "spring" },
    },
  };

  return (
    <React.Fragment>
      <motion.h1
        variants={animationContent}
        initial="hidden"
        animate="show"
        className="text-6xl font-semibold text-secondary"
      >
        {localeText.title}
      </motion.h1>
      <motion.p
        variants={animationContent}
        initial="hidden"
        animate="show"
        className=" text-tertiary"
      >
        {localeText.description}
      </motion.p>
      <motion.div
        variants={animationContent}
        initial="hidden"
        animate="show"
        className="space-y-6 md:space-x-6"
      >
        <Button text={localeText.btnText1} variant="primary" />
        <Button text={localeText.btnText2} variant="secondary" />
      </motion.div>
    </React.Fragment>
  );
};

export default MotionDivTexts;
