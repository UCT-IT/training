"use client";
import React from "react";
import { motion } from "framer-motion";
import { strings } from "@/app/assets/locales/locales";
import Image from "next/image";
import img1 from "/public/images/about/values/img1.svg";
import img2 from "/public/images/about/values/img2.svg";
import img3 from "/public/images/about/values/img3.svg";
import img4 from "/public/images/about/values/img4.svg";

const MotionValuesCard = () => {
  const localeText = strings.about.values;
  const images = [img1, img2, img3, img4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className="container mx-auto px-5 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16"
    >
      {localeText.cards.map((item, index) => (
        <div key={item.number} className="bg-white p-16 rounded-2xl">
          <div className="flex justify-between items-center">
            <Image
              className="rounded-full h-16 w-16"
              alt={localeText.altText}
              src={images[index] ?? img1}
            />
            <div>
              <p className="py-2 px-5 text-tertiary font-bold text-[18px] border-[1px] border-btnbg rounded-full">
                {item.number}
              </p>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-tertiary my-5">
            {item.title}
          </h1>
          <p className="text-[19px] font-medium text-textColor leading-8 lg:whitespace-pre-line">
            {item.description}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default MotionValuesCard;
