"use client";
import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/app/components/hooks/useMediaQuery";

const MotionDivHeroBg = () => {
  const isLargeDevice = useMediaQuery("(min-width: 1024px)");
  return (
    <React.Fragment>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isLargeDevice ? "33.333333%" : "100%" }}
        transition={{ duration: 0.5, ease: "linear", delay: 0.1 }}
        className="bg-primary w-full h-1/3 lg:h-full lg:w-1/3 absolute bottom-0 lg:right-0 -z-20"
      ></motion.div>
    </React.Fragment>
  );
};

export default MotionDivHeroBg;
