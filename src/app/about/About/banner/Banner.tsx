import React from "react";
import BannerArrow from "./motionContent/BannerArrow";
import { strings } from "@/app/assets/locales/locales";

const Banner = () => {
  const localeText = strings.about.banner;
  return (
    <div className="bg-[#F9FAFB] py-40 relative ">
      <div className="responsive-container">
        <BannerArrow />
        <div className="text-center">
          <h3 className="text-primary  text-5xl font-bold whitespace-pre-line">
            {localeText.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {localeText.number.map((item) => (
              <div key={item.count} className="text-center">
                <h3 className="text-info  font-semibold text-6xl">
                  {item.count}
                </h3>
                <p className="my-3 pt-6 text-secondary font-bold text-[22px]">
                  {item.text}
                </p>
                <p className="text-textColor whitespace-pre-line font-normal text-[18px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
