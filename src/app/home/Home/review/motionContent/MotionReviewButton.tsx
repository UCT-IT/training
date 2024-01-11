"use client";
import React from "react";
import { motion } from "framer-motion";

import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";

const MotionReviewButton = () => {
  const localeText = strings.home.review;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center mt-16"
    >
      <Button variant="primary" text={localeText.btn} />
    </motion.div>
  );
};

export default MotionReviewButton;
