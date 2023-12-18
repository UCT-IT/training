"use client"
import React from "react";
import arrowImg from "../../../../../../public/images/Home/review/arrow.svg";
import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";
import { motion } from "framer-motion";

const MotionReviewArrow = () => {
  const localeText = strings.home.review;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Image
        className="mx-auto absolute -top-20 right-1/2"
        alt={localeText.altTextArrow}
        src={arrowImg}
      />
    </motion.div>
  );
};

export default MotionReviewArrow;
