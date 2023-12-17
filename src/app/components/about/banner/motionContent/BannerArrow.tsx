"use client"
import React from 'react';
import arrow from "../../../../../../public/images/about/banner/arrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const BannerArrow = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            className="mx-auto absolute -top-24 right-1/2"
            alt="kkk"
            src={arrow}
          />
        </motion.div>
    );
};

export default BannerArrow;