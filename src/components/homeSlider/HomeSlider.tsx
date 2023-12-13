"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "../common/carouselButtons/NextArrow";
import PrevArrow from "../common/carouselButtons/PrevArrow";
import Link from "next/link";

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
  const slideStyle = {
    margin: "0 10px", // Adjust the margin as needed for spacing
  };
  return (
    <div className="container mx-auto font-kumbh relative py-9 bg-white">
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="font-bold font-newsreader text-secondary  text-center text-4xl mb-16"
      >
        Browse our popular courses
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Slider {...settings}>
          {[2, 2, 2, 2, 2].map((item) => (
            <div key={item} className=" group">
              <div
                style={slideStyle}
                className="rounded-3xl border-[.1px] border-gray-200 shadow-3xl transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2"
              >
                <Link href="#">
                  <div className="overflow-hidden rounded-t-3xl relative">
                    <img
                      className="h-full w-full object-cover duration-150 transition-all group-hover:scale-110"
                      src="https://assets-global.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
                      alt=""
                    />
                    <div className="absolute top-10 right-10 flex items-center gap-2 text-[15px]">
                      <p className="bg-white text-secondary py-3 px-6 rounded-full font-semibold ">
                        8hr 12min
                      </p>
                      <p className="text-white bg-secondary py-3 px-6 rounded-full font-semibold ">
                        $ 99.00 USD
                      </p>
                    </div>
                  </div>
                  <div className="p-9 bg-white rounded-b-3xl">
                    <h1 className="font-bold text-2xl text-secondary group-hover:text-primary transition-all">
                      Graphics Design 101
                    </h1>
                    <p className="text-[18px] mt-4 text-[#798BA0]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia esse eveniet numquam asperiores, ad beatae officia
                      aliquid distinctio culpa possimus?
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <img
                        className="h-11 w-11 shadow-lg rounded-full"
                        src="https://assets-global.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-800.jpeg"
                        alt=""
                      />
                      <p className="font-bold text-xl text-[#1E3D60]">
                        Jobayer Hossain
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default HomeSlider;
