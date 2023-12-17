"use client";
import Button from "@/app/components/common/Buttons/Button";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";

const MotionButton = () => {
  const localeText = strings.home.aboutSection;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Button variant="secondary" text={localeText.btnText} />
    </motion.div>
  );
};

export default MotionButton;
