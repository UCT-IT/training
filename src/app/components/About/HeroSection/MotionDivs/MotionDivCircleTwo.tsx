"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionDivCircleTwo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <motion.div
        initial={{ scale: 1 }}
        animate={isScrolled ? { scale: 1.5 } : { scale: 1.2 }}
        exit={{ scale: 1 }}
        transition={
          isScrolled
            ? { duration: 0.7, ease: "easeOut" }
            : { duration: 0.7, ease: "easeOut" }
        }
        className={`bg-info w-[400px] h-[200px] rounded-t-full absolute -left-[100px] -bottom-[50px] -z-10`}
      ></motion.div>
    </React.Fragment>
  );
};

export default MotionDivCircleTwo;
