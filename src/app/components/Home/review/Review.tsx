"use client";
import React from "react";
import { motion } from "framer-motion";
import CommonCarousel from "../../common/commonCarousel/CommonCarousel";
import { FaStar } from "react-icons/fa";
import arrowImg from "../../../../../public/images/Home/review/arrow.svg";
import Image from "next/image";
import Button from "../../common/Buttons/Button";
import { strings } from "@/app/assets/locales/locales";
import data from "../../../../../public/data/data.json";

const Review = () => {
  const localeText = strings.home.review;
  return (
    <div className="bg-[#F9FAFB] font-kumbh relative py-44 ">
      <div className="container mx-auto">
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
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: false }}
          className="font-bold font-newsreader text-secondary  text-center text-4xl mb-16"
        >
          {localeText.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CommonCarousel>
            {data.review.map((item) => (
              <div key={item.id} className="mr-5">
                <div className="bg-white mr-[20px] rounded-2xl border-[1px] border-gray-200">
                  <div className="lg:flex gap-10 items-center px-14 py-28">
                    <Image
                      alt={localeText.altTextAuthor}
                      src={item.image}
                      className="h-52 w-52 rounded-full mx-auto"
                      height={1000}
                      width={1000}
                    />
                    <div className="space-y-5 text-center lg:text-left">
                      <div className="flex item-center justify-center lg:justify-normal gap-2 mt-3 md:mt-0 text-center md:text-left text-[20px] text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-textColor text-[18px]">{item.say}</p>
                      <div>
                        <strong className="text-secondary font-bold text-[18px]">
                          {item.name}
                        </strong>
                        <p className="text-textColor text-[18px]">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CommonCarousel>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
        >
          {localeText.number.map((item) => (
            <div key={item.count} className="text-center">
              <h1 className="text-secondary font-bold text-5xl">
                {item.count}
              </h1>
              <p className="text-textColor mt-3 font-medium text-[18px]">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="primary" text={localeText.btn} />
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
