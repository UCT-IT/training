"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";

const BannerNumber = () => {
  const localeText = strings.about.banner;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
    >
      {localeText.number.map((item) => (
        <div key={item.count} className="text-center">
          <h1 className="text-info font-newsreader font-semibold text-6xl">
            {item.count}
          </h1>
          <p className="my-3 pt-6 text-secondary font-bold text-[22px]">
            {item.text}
          </p>
          <p className="text-textColor whitespace-pre-line font-normal text-[18px]">
            {item.desc}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default BannerNumber;
