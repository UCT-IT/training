"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const MotionCircle = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <React.Fragment>
      <InView as="div" onChange={(inView) => setIsScrolled(inView)}>
        <motion.div
          initial={{ scale: 1 }}
          animate={isScrolled ? { scale: 1.2 } : { scale: 1.5 }}
          transition={
            isScrolled
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.7, ease: "easeOut" }
          }
          className="bg-info w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-bl-full -z-10 absolute top-0 right-0"
        ></motion.div>
      </InView>
    </React.Fragment>
  );
};

export default MotionCircle;
