"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "../../../public/data/homeCarousel.json"
import Image from "next/image";
import img from '../../../public/images/homeImages/homeCarousel/1.jpeg'
const HomeSlider = () => {
  console.log(data.cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = data.cards;
  const handleClickLeft = () => {
    console.log("Before Left Click - currentIndex:", currentIndex);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    console.log("After Left Click - currentIndex:", currentIndex);
  };
  
  const handleClickRight = () => {
    console.log("Before Right Click - currentIndex:", currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    console.log("After Right Click - currentIndex:", currentIndex);
  };
  
  return (
    <div className="slider-carousel relative container mx-auto mt-32">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="font-bold text-[#1E3D60]  text-center text-4xl mb-16"
      >
        {data.title}
      </motion.h2>
      <button
        onClick={handleClickLeft}
        className="absolute grid place-items-center top-[65%] translate-y-[-50%]  bg-white hover:bg-[#064EA4] hover:text-white transition-all h-[80px] w-[80px] rounded-full shadow-2xl -left-6 z-10 "
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleClickRight}
        className="absolute grid place-items-center top-[65%] translate-y-[-50%] bg-white hover:bg-[#064EA4] hover:text-white transition-all h-[80px] w-[80px] rounded-full shadow-2xl -right-6 z-10 "
      >
        <FaArrowRight />
      </button>
      s
      <div className="carousel-container flex items-center gap-4 overflow-hidden">
        {cards.map(
          (item, index) => (
            <motion.div
              initial={{ opacity: 0, x: index === 0 ? 0 : 1000 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.2 * index },
              }}
              key={item.id}
              className={`carousel-item w-full ${
                index === 0 ? "left" : "right"
              }`}
            >
              <motion.div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 0.5, delay: 0.2 }}
                // viewport={{ once: true }}
                className="group shadow-2xl rounded-t-3xl relative"
              >
                <div className="transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
                  <Link href="#">
                    <div className="overflow-hidden rounded-t-3xl relative">
                      <Image alt="card image" src={img} />
                      <div className="absolute top-10 right-10 flex items-center gap-2 text-[15px]">
                        <p className="bg-white text-[#1E3D60] py-3 px-6 rounded-full font-semibold ">
                          {item.duration}
                        </p>
                        <p className="text-white bg-[#1E3D60] py-3 px-6 rounded-full font-semibold ">
                          {item.price}
                        </p>
                      </div>
                    </div>
                    <div className="p-9 bg-white">
                      <h1 className="font-bold text-2xl text-[#1E3D60] hover:text-[#064EA4] transition-all">
                       {item.title}
                      </h1>
                      <p className="text-[18px] mt-4 text-[#798BA0]">
                        {item.description}
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <Image className="h-[70px] w-[70px] rounded-full" alt="author image" src={img} />
                        <p className="font-bold text-xl text-[#1E3D60]">
                          {item.author.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default HomeSlider;
