"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";

const MotionDivTexts = () => {
  const localeText = strings.about.heroSection;

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
      <div className="responsive-container ">
        <div className="lg:flex justify-between text-center lg:text-left lg:whitespace-pre-line">
          <motion.h1
            variants={animationContent}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-6xl font-semibold text-secondary md:leading-snug font-newsreader"
          >
            {localeText.title}
          </motion.h1>
          <motion.p
            variants={animationContent}
            initial="hidden"
            animate="show"
            className="font-kumbh text-textColor md:text-lg py-5"
          >
            {localeText.description}
          </motion.p>
        </div>
        <div className="pt-8">
          <motion.div
            variants={animationContent}
            initial="hidden"
            animate="show"
            className="md:text-center lg:text-left"
          >
            <Button text={localeText.btnText} variant="primary" />
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MotionDivTexts;
