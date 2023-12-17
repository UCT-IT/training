"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const MotionDivCircleTwo = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <React.Fragment>
      <InView as="div" onChange={(inView) => setIsScrolled(inView)}>
        <motion.div
          initial={{ scale: 1 }}
          animate={isScrolled ? { scale: 1.2 } : { scale: 1.5 }}
          exit={{ scale: 1 }}
          transition={
            isScrolled
              ? { duration: 0.7, ease: "easeOut" }
              : { duration: 0.7, ease: "easeOut" }
          }
          className={`bg-info w-[400px] h-[200px] rounded-t-full absolute -left-[100px] -bottom-[50px] -z-10`}
        ></motion.div>
      </InView>
    </React.Fragment>
  );
};

export default MotionDivCircleTwo;
