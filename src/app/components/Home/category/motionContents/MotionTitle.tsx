"use client";
import React from 'react';
import { motion } from "framer-motion";
import { strings } from '@/assets/locales/locales';

const MotionTitle = () => {
    const localeText = strings.home.Category
    return (
        <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="font-bold text-primary  text-center text-4xl mb-16"
      >
        {localeText.title}
      </motion.h2>
    );
};

export default MotionTitle;