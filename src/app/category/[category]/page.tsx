import React from "react";
import data from "../../../../public/data/data.json";
import CommonCourseCard from "@/app/components/common/commonCarouselCard/CommonCourseCard";
import { strings } from "@/app/assets/locales/locales";
import HeroSection from "@/app/components/Courses/HeroSection/HeroSection";
import Categories from "@/app/components/common/categories/Categories";

const categoryPage = ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  const filterData = data.courses.filter(
    (item) => item.category === params.category
  );
  const localetextOfCard = strings.home.homeCarousel;
  const altText = {
    altCourseImg: localetextOfCard.altCourseImg,
    altAuthorImg: localetextOfCard.altAuthorImg,
  };
  return (
    <React.Fragment>
      <HeroSection />
      <div className="responsive-container my-16">
        <div className="mb-12 flex justify-end">
          <Categories />
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2  gap-2">
          {filterData.map((item) => (
            <CommonCourseCard item={item} localetext={altText} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default categoryPage;