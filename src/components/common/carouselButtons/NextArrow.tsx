import { FaArrowRight } from "react-icons/fa";
import React from "react";

const NextArrow = () => {
  return (
    <button
      className="absolute grid place-items-center top-[50%] translate-y-[-50%] bg-white hover:bg-[#064EA4] hover:text-white transition-all h-[70px] w-[70px] rounded-full shadow-2xl right-5 z-10 "
    >
      <FaArrowRight />
    </button>
  );
};

export default NextArrow;