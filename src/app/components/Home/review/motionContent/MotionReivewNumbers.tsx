"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";

const MotionReivewNumbers = () => {
  const localeText = strings.home.review;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
    >
      {localeText.number.map((item) => (
        <div key={item.count} className="text-center">
          <h1 className="text-secondary font-bold text-5xl">{item.count}</h1>
          <p className="text-textColor mt-3 font-medium text-[18px]">
            {item.text}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default MotionReivewNumbers;
