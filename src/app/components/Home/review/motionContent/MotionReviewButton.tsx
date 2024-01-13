"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "../../../common/Buttons/Button";
import { strings } from "@/app/assets/locales/locales";
import Link from "next/link";

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
      <Link href="/courses">
        <Button variant="primary" text={localeText.btn} />
      </Link>
    </motion.div>
  );
};

export default MotionReviewButton;
