import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const starsArray = Array.from({ length: 5 }, (_, index) => {
    if (index < fullStars) {
      return <FaStar key={index} />;
    } else if (hasHalfStar && index === fullStars) {
      return <FaStarHalf key={index} style={{ color: "#FFD700" }} />;
    } else {
      return <FaStar key={index} style={{ color: "#C4C4C4" }} />;
    }
  });

  return starsArray;
};

export default renderStars;
