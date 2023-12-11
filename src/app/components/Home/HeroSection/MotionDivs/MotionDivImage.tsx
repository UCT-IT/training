"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../../../../public/images/Home/HeroSection/hero.jpeg";
import { strings } from "@/app/assets/locales/locales";
import { InView } from "react-intersection-observer";

const MotionDivImage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const localeText = strings.home.heroSection;
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

  return (
    <React.Fragment>
      <InView
        as="div"
        threshold={0.7}
        initialInView={false}
        onChange={(inView) => setIsScrolled(inView)}
      >
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
      </InView>
    </React.Fragment>
  );
};

export default MotionDivImage;
