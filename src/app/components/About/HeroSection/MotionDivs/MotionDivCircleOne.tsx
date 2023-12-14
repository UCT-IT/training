"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MotionDivCircleOne = () => {
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
        className="bg-warning w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-bl-full -z-10 absolute top-0 right-0"
      ></motion.div>
    </React.Fragment>
  );
};

export default MotionDivCircleOne;
