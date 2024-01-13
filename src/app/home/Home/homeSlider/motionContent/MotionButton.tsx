"use client";
import { motion } from "framer-motion";
import Button from "../../../common/Buttons/Button";
import { strings } from "@/app/assets/locales/locales";
const MotionButton = () => {
  const localeText = strings.home.homeCarousel;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center mt-6"
    >
      <Button variant="primary" text={localeText.btn} />
    </motion.div>
  );
};

export default MotionButton;
