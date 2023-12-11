"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [0, 0, 0, 9];
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  return (
    <div className="slider-carousel relative container mx-auto mt-32">
      <motion.h2
        initial={{ scale: 0, opacity: 0}}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: .4, ease:"easeInOut"}}
        viewport={{ once: false }}
        className="font-bold text-[#1E3D60]  text-center text-4xl mb-16"
      >
        Browse our popular courses
      </motion.h2>
      <button style={{
          color: "white",
          background: "#064EA4",
          height: "70px",
          width: "70px",
          borderRadius: "50%",
          zIndex: 1,
          position: "absolute",
          top: "400px",
          left: 0,
        }} className="" onClick={handlePrev}>
        Prevc
      </button>
      <div className="carousel-container flex items-center gap-4">
        {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
          <div
            key={index}
            className={`carousel-item w-1/2 ${index === 0 ? "left" : "right"}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              key={item}
              className="group shadow-2xl rounded-t-3xl relative"
            >
              <div className="transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
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
          </div>
        ))}
      </div>
      <button
        style={{
          color: "white",
          background: "#064EA4",
          height: "70px",
          width: "70px",
          borderRadius: "50%",
          zIndex: 1,
          position: "absolute",
          top: "400px",
          right: 0,
        }}
        className="font-bold hover:bg-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default HomeSlider;
