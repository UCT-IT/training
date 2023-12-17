"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "../carouselButtons/NextArrow";
import PrevArrow from "../carouselButtons/PrevArrow";
import React from "react";
type carouselProps = {
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
};
const CommonCarousel = ({ children, settings }: { children: React.ReactNode, settings: carouselProps }) => {
  const customSettings = {
    ...settings,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return <Slider {...customSettings}>{children}</Slider>;
};

export default CommonCarousel;
