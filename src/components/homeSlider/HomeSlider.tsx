"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "../common/carouselButtons/NextArrow";
import PrevArrow from "../common/carouselButtons/PrevArrow";
import { motion } from "framer-motion";

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-5 md:px-0 py-[540px]">
      <motion.h2
        initial={{ scale: 0, opacity: 0}}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: .4, ease:"easeInOut"}}
        viewport={{ once: false }}
        className="font-bold text-[#1E3D60]  text-center text-4xl mb-16"
      >
        Browse our popular courses
      </motion.h2>
      <Slider {...settings}>
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5, delay: .2 }}
            viewport={{ once: false }}
            key={item}
            className="group shadow-2xl rounded-t-3xl"
          >
            <div className="mr-4 transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
              <Link href="#">
                <div className="overflow-hidden rounded-t-3xl relative">
                  <img
                    className="group-hover:scale-110 transition-all w-full duration-300"
                    src="https://assets-global.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
                    alt=""
                  />
                  <div className="absolute top-10 right-10 flex items-center gap-2 text-[15px]">
                    <p className="bg-white text-[#1E3D60] py-3 px-6 rounded-full font-semibold ">
                      8hr 12min
                    </p>
                    <p className="text-white bg-[#1E3D60] py-3 px-6 rounded-full font-semibold ">
                      $ 99.00 USD
                    </p>
                  </div>
                </div>
                <div className="p-9 bg-white">
                  <h1 className="font-bold text-2xl text-[#1E3D60] hover:text-[#064EA4] transition-all">
                    Graphics Design 101
                  </h1>
                  <p className="text-[18px] mt-4 text-[#798BA0]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia esse eveniet numquam asperiores, ad beatae officia
                    aliquid distinctio culpa possimus?
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                      className="h-11 w-11 shadow-lg rounded-full"
                      src="https://assets-global.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
                      alt=""
                    />
                    <p className="font-bold text-xl text-[#1E3D60]">
                      Jobayer Hossain
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
