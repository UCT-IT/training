import React from "react";
import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";
import data from "../../../../../../public/data/data.json";
import renderStars from "@/app/components/common/commonCarousel/renderStars/RenderStars";
import CommonCarousel from "@/app/components/common/commonCarousel/CommonCarousel";

const MotionReviewCarousel = () => {
  const localeText = strings.home.review;
  return (
    <div className="animate-fadeIn">
      <CommonCarousel
        settings={{
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }}
      >
        {data.review.map((item) => (
          <div key={item.id}>
            <div className="h-[500px] md:h-[480px] lg:h-[400px] rounded-2xl md:mr-5 border-[1px] border-gray-200">
              <div className="h-full rounded-2xl grid place-items-center px-10">
                <div className="lg:flex gap-10 items-center">
                  <Image
                    alt={localeText.altTextAuthor}
                    src={item.image}
                    className="h-36 w-36 rounded-full mx-auto"
                    height={1000}
                    width={1000}
                  />
                  <div className="space-y-5 text-center lg:text-left">
                    <div className="flex item-center justify-center lg:justify-normal gap-2 mt-3 md:mt-0 text-center md:text-left text-[20px] text-yellow-400">
                      {renderStars(item.ratings)}
                    </div>
                    <p className="text-textColor text-[18px]">{item.say}</p>
                    <div>
                      <strong className="text-secondary font-bold text-[18px]">
                        {item.name}
                      </strong>
                      <p className="text-textColor text-[18px]">
                        {item.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CommonCarousel>
    </div>
  );
};

export default MotionReviewCarousel;
