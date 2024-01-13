import { strings } from "@/app/assets/locales/locales";
import data from "../../../../../public/data/data.json";
import React from "react";
import Categories from "@/app/components/common/categoryButton/CategoryButton";
import CommonCourseCard from "@/app/components/common/commonCarouselCard/CommonCourseCard";

const AllCourses = () => {
  const localetextOfCard = strings.home.homeCarousel;
  const localeTextOfCourses = strings.courses.allCourses;
  const altText = {
    altCourseImg: localetextOfCard.altCourseImg,
    altAuthorImg: localetextOfCard.altAuthorImg,
  };
  return (
    <div className="py-28 bg-[#F9FAFB]">
      <div className="responsive-container">
        <div className="lg:flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary  text-center lg:text-left mb-5 lg:mb-0">
            {localeTextOfCourses.title}
          </h1>
          <Categories />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-2">
          {data.courses
            .filter((item) => item.preview === true)
            .map((item) => (
              <CommonCourseCard
                key={item.title}
                item={item}
                localetext={altText}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
