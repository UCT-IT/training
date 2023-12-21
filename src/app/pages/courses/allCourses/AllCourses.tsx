import { strings } from "@/app/assets/locales/locales";
import data from "../../../../../public/data/data.json";
import React from "react";
import CommonCourseCard from "@/app/components/common/commonCarouselCard/CommonCourseCard";
import Link from "next/link";

const AllCourses = () => {
  const localetextOfCard = strings.home.homeCarousel;
  const localeTextOfCourses = strings.courses.allCourses;
  const sortedUniqueCategories = Array.from(
    new Set<string>(data.courses.map((item) => item.category))
  );
  const altText = {
    altCourseImg: localetextOfCard.altCourseImg,
    altAuthorImg: localetextOfCard.altAuthorImg,
  };
  return (
    <div className="py-28 bg-[#F9FAFB]">
      <div className="responsive-container">
        <div className="md:flex justify-between items-center">
          <h1 className="text-4xl font-bold text-primary  text-center md:text-left mb-3 md:mb-0">
            {localeTextOfCourses.title}
          </h1>
          <div className="flex items-center justify-center md:justify-normal gap-7">
            <Link
              className="text-tertiary capitalize border-[1px] border-btnhover px-7 py-2 rounded-full font-bold"
              href="#"
            >
              {localeTextOfCourses.Category}
            </Link>
            {sortedUniqueCategories.map((item) => (
              <Link
                key={item}
                className="text-tertiary capitalize border-[1px] border-btnhover px-7 py-2 rounded-full font-bold"
                href="#"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-2">
          {data.courses
            .filter((item) => item.preview === true)
            .map((item) => (
              <CommonCourseCard item={item} localetext={altText} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
