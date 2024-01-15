import React from "react";
import MotionReviewArrow from "./motionContent/MotionReviewArrow";
import MotionReviewCarousel from "./motionContent/MotionReviewCarousel";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";
import Link from "next/link";

const Review = () => {
  const localeText = strings.home.review;
  return (
    <div className="bg-[#F9FAFB] relative py-44">
      <div className="responsive-container mx-auto">
        <MotionReviewArrow />
        <h2 className="font-bold text-secondary  text-center text-4xl mb-16 animate-fadeIn">
          {localeText.title}
        </h2>
        <MotionReviewCarousel />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 animate-fadeIn">
          {localeText.number.map((item) => (
            <div key={item.count} className="text-center">
              <h1 className="text-secondary font-bold text-5xl">
                {item.count}
              </h1>
              <p className="text-textColor mt-3 font-medium text-[18px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/courses">
            <Button variant="primary" text={localeText.btn} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review;
