"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrowImg from "../../../../../../public/images/courses/arrow.svg";
import { strings } from "@/app/assets/locales/locales";

const MotionArrow = () => {
  const localeText = strings.courses.featuredCourse;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="absolute -top-60 left-[47%] z-20"
    >
      <Image
        alt={localeText.altTextArrowImage}
        src={arrowImg}
        className="w-16"
      />
    </motion.div>
  );
};

export default MotionArrow;
