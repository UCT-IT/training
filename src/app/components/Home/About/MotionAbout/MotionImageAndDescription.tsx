"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../../../../../public/images/Home/About/home-about.jpg";
import iconOne from "../../../../../../public/images/Home/About/icon-1-home-about.svg";
import iconTwo from "../../../../../../public/images/Home/About/icon-2-home-about.svg";
import iconThree from "../../../../../../public/images/Home/About/icon-3-home-about.svg";
import { strings } from "@/app/assets/locales/locales";

const MotionImageAndDescription = () => {
  const localeText = strings.home.aboutSection.aboutDetails;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col-reverse lg:flex-row justify-between items-center mb-14"
    >
      <div className="w-full lg:max-w-[48%] rounded-3xl lg:mr-8">
        <Image
          className="max-w-full rounded-3xl"
          src={aboutImg}
          alt={localeText.altText}
        />
      </div>
      <div className=" mb-8 lg:mb-0">
        <div className="md:flex justify-center items-center gap-8 mb-[52px] space-y-5">
          <div>
            <Image
              className="mx-auto w-[60px] min-w-[60px] min-h-[60px] rounded-full"
              src={iconOne}
              alt={localeText.iconAltText}
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-tertiary text-2xl font-bold mb-2">
              {localeText.detailOne.title}
            </h3>
            <p className="text-textColor text-lg leading-6 whitespace-pre-line">
              {localeText.detailOne.description}
            </p>
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-8 mb-[52px] space-y-5">
          <div>
            <Image
              className="mx-auto w-[60px] min-w-[60px] min-h-[60px] rounded-full"
              src={iconTwo}
              alt={localeText.iconAltText}
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-tertiary text-2xl font-bold mb-2">
              {localeText.detailTwo.title}
            </h3>
            <p className="text-textColor text-lg leading-6 whitespace-pre-line">
              {localeText.detailTwo.description}
            </p>
          </div>
        </div>
        <div className="md:flex justify-center items-center gap-8 space-y-5">
          <span>
            <Image
              className="mx-auto w-[60px] min-w-[60px] min-h-[60px] rounded-full"
              src={iconThree}
              alt={localeText.iconAltText}
            />
          </span>
          <div className="text-center md:text-left">
            <h3 className="text-tertiary text-2xl font-bold mb-2">
              {localeText.detailThree.title}
            </h3>
            <p className="text-textColor text-lg leading-6 whitespace-pre-line">
              {localeText.detailThree.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MotionImageAndDescription;
