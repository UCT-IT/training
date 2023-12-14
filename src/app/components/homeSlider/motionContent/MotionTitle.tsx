"use client";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";
const MotionTitle = () => {
  const localeText = strings.home.homeCarousel;
  return (
    <motion.h2
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: false }}
      className="font-bold font-newsreader text-secondary  text-center text-4xl mb-16"
    >
      {localeText.title}
    </motion.h2>
  );
};

export default MotionTitle;
