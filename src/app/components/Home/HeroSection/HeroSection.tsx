"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import heroImg from "../../../../../public/images/Home/HeroSection/hero.jpeg";
import { motion } from "framer-motion";
import Button from "../../common/Buttons/Button";
import { strings } from "@/app/assets/locales/locales";
import useMediaQuery from "../../hooks/useMediaQuery";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isLargeDevice = useMediaQuery("(min-width: 1024px)");
  const localeText = strings.home.heroSection;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 100);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={isScrolled ? { scale: 1.5 } : { scale: 1.2 }}
          exit={{ scale: 1 }}
          transition={
            isScrolled
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.7, ease: "easeOut" }
          }
          className="bg-warning w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-ee-full -z-10 absolute top-0 left-0"
        ></motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isLargeDevice ? "33.333333%" : "100%" }}
          transition={{ duration: 0.5, ease: "linear", delay: 0.1 }}
          className="bg-primary w-full h-1/3 lg:h-full lg:w-1/3 absolute bottom-0 lg:right-0 -z-20"
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
              className="text-6xl font-semibold text-secondary font-newsreader"
            >
              {localeText.title}
            </motion.h1>
            <motion.p
              variants={animationContent}
              initial="hidden"
              animate="show"
              className="font-kumbh text-tertiary"
            >
              {localeText.description}
            </motion.p>
            <motion.div
              variants={animationContent}
              initial="hidden"
              animate="show"
              className="space-y-6 md:space-x-6"
            >
              <Button text={localeText.btnText1} variant="primary" />
              <Button text={localeText.btnText2} variant="secondary" />
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
                alt={localeText.altText}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
