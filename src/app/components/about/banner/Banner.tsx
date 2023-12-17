import React from "react";
import BannerTittle from "./motionContent/BannerTittle";
import BannerArrow from "./motionContent/BannerArrow";
import BannerNumber from "./motionContent/BannerNumber";

const Banner = () => {
  return (
    <div className="bg-[#F9FAFB] py-40 relative font-kumbh">
      <div className="responsive-container">
        <BannerArrow />
        <div className="text-center">
          <BannerTittle />
          <BannerNumber />
        </div>
      </div>
    </div>
  );
};

export default Banner;
