"use client";
import React from "react";
import { motion } from "framer-motion";
import CommonCarousel from "../../../common/commonCarousel/CommonCarousel";
import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";
import data from "../../../../../../public/data/data.json";
import renderStars from "@/app/components/common/renderStars/RenderStars";

const MotionReviewCarousel = () => {
  const localeText = strings.home.review;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <CommonCarousel
        settings={{
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
        }}
      >
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
                    {renderStars(item.ratings)}
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
  );
};

export default MotionReviewCarousel;
