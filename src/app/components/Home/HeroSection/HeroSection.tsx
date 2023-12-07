"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import heroImg from "../../../../../public/images/Home/HeroSection/hero.jpeg";
import ButtonPrimary from "../../common/Buttons/ButtonPrimary";
import ButtonSecondary from "../../common/Buttons/ButtonSecondary";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const animationContent = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.1, type: "spring" },
    },
  };

  const containerVariants = {
    visible: {
      opacity: 1,
      translateY: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0.9,
      translateY: 32,
      rotate: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="relative z-10 font-newsreader overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={isScrolled ? { scale: 1.5 } : { scale: 1.2 }}
          exit={{ scale: 1 }}
          transition={
            isScrolled
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.7, ease: "easeOut" }
          }
          className={`bg-warning w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-ee-full -z-10 absolute top-0 left-0`}
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "33.333333%" }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="bg-primary w-full h-1/3 lg:h-full lg:w-1/3 absolute bottom-0 right-0 -z-20"
        ></motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={isScrolled ? { scale: 1.5 } : { scale: 1.2 }}
          exit={{ scale: 1 }}
          transition={
            isScrolled
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.7, ease: "easeOut" }
          }
          className={`bg-info w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-ss-full rou absolute right-0 bottom-0 -z-10`}
        ></motion.div>
        <div className="responsive-container lg:flex justify-center items-center py-[70px] lg:py-[127px]">
          <div className="space-y-5 text-center lg:text-left">
            <motion.h1
              variants={animationContent}
              initial="hidden"
              animate="show"
              className="text-6xl font-semibold text-secondary"
            >
              Educationic X Webflow Template
            </motion.h1>
            <motion.p
              variants={animationContent}
              initial="hidden"
              animate="show"
              className="font-kumbh text-tertiary"
            >
              Presenting Educationic X, the ultimate Education Webflow Template
            </motion.p>
            <motion.div
              variants={animationContent}
              initial="hidden"
              animate="show"
              className="space-y-6 md:space-x-6"
            >
              <ButtonPrimary text="Explore Courses" />
              <ButtonSecondary text="Learn More!" />
            </motion.div>
          </div>
          <motion.div
            initial="visible"
            animate={isScrolled ? "visible" : "hidden"}
            variants={containerVariants}
            className={`mt-5 lg:mt-0`}
          >
            <motion.div
              initial={{ translateY: 500, opacity: 0, rotate: 10 }}
              animate={{ translateY: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
            >
              <Image
                className={`max-w-full rounded-3xl`}
                src={heroImg}
                alt="Hero Section Image"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
