"use client";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Button from "../../common/Buttons/Button";
import data from "../../../../../public/data/data.json";
import CommonCarousel from "../../common/commonCarousel/CommonCarousel";
import { strings } from "@/app/assets/locales/locales";
import CommonCarouselCard from "../../common/commonCarouselCard/CommonCourseCard";
import MotionTitle from "./motionContent/MotionTitle";
import MotionButton from "./motionContent/MotionButton";

const HomeSlider = () => {
  const localetext = strings.home.homeCarousel;
  const altText = {
    altCourseImg: localetext.altCourseImg,
    altAuthorImg: localetext.altAuthorImg,
  };
  return (
    <div className="responsive-container  relative py-32">
      <MotionTitle />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <CommonCarousel
          settings={{
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
          }}
        >
          {data.courses
            .filter((item) => item.preview === true)
            .map((item) => (
              <CommonCarouselCard item={item} localetext={altText} />
            ))}
        </CommonCarousel>
        <MotionButton />
      </motion.div>
      <div className="text-center mt-6">
        <Button variant="primary" text={localetext.btn} />
      </div>
    </div>
  );
};

export default HomeSlider;
