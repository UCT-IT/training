"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "../../../../../../public/data/data.json";
import videoLogo from "../../../../../../public/images/Home/category/video.svg";
import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";

const MotionCard = () => {
  const altText = strings.home.Category;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {data.categories.map((item) => (
        <div
          key={item.id}
          className="group shadow-2xl relative transition-all duration-300 transform translate-y-0 hover:-translate-y-4 rounded-3xl"
        >
          <Link href="#" className="s">
            <div className="overflow-hidden relative rounded-t-3xl">
              <Image
                className="h-full w-full object-cover duration-150 transition-all hover:scale-110"
                width={100}
                height={100}
                alt={altText.imageAltText}
                src={item.image}
              />
              <div className="absolute top-6 right-10 text-[15px]">
                <p className="bg-white flex gap-2 items-center text-secondary py-3 px-6 rounded-full font-semibold ">
                  <Image alt={altText.imageAltVideoText} src={videoLogo} />
                  {item.video}
                </p>
              </div>
            </div>
            <div className="p-9 bg-white rounded-b-2xl">
              <h1 className="font-bold text-2xl text-secondary group-hover:text-primary transition-all">
                {item.title}
              </h1>
              <p className="text-[18px] mt-4 text-[#798BA0]">
                {item.description}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </motion.div>
  );
};

export default MotionCard;
