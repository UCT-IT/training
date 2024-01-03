"use client";
import { strings } from "@/app/assets/locales/locales";
import Image from "next/image";
import React, { useState } from "react";
import data from "../../../../../public/data/data.json";
import renderStars from "../../common/commonCarousel/renderStars/RenderStars";
import { Link, Element } from "react-scroll";

type DetailsProps = {
  singleData: {
    details: {
      tabs: { text: string; id: string }[];
      contents: {
        about: {
          title: string;
          description: string;
        };
        topics: {
          title: string;
          description: string;
          list: string[];
        };
        results: {
          title: string;
          description1: string;
          description2: string;
          image: string;
        };
        reviews: {
          title: string;
        };
      };
    };
  };
};

const Details = ({ singleData }: DetailsProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const localeText = strings.home.review;
  const { tabs, contents } = singleData.details ?? {};
  const handleTabClick = () => {
    setIsScrolled(true);
  };
  return (
    <div className="my-16">
      <div className="flex items-center gap-4 flex-wrap">
        {tabs.map((item) => (
          <Link
            key={item.id}
            className="text-tertiary cursor-pointer capitalize border-[1px] text-[14px] border-btnhover px-6 py-2 hover:bg-tertiary hover:text-white transition-all rounded-full font-bold"
            to={item.id}
            spy={true}
            smooth={true}
            offset={-120} 
            duration={500}
            onClick={handleTabClick}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <Element name="about" className={`my-16 space-y-5 ${isScrolled ? "mt-[60px]" : ""}`}>
        <h1 className="text-4xl font-bold text-secondary">
          {contents.about.title}
        </h1>
        <p className="text-textColor leading-7 pb-10">
          {contents.about.description}
        </p>
        <hr />
      </Element>
      <Element name="topics" className={`my-16 space-y-5 ${isScrolled ? "mt-[60px]" : ""}`}>
        <h1 className="text-4xl font-bold text-secondary">
          {contents.topics.title}
        </h1>
        <p className="text-textColor leading-7">
          {contents.topics.description}
        </p>
        <div className="ml-6">
          {contents.topics.list.map((item, index) => (
            <p key={item} className="text-textColor text-[17px] leading-10">
              {index + 1}. {item}.
            </p>
          ))}
        </div>
        <hr />
      </Element>
      <Element name="results" className={`my-16 space-y-5 ${isScrolled ? "mt-[60px]" : ""}`}>
        <h1 className="text-4xl font-bold text-secondary">
          {contents.results.title}
        </h1>
        <p className="text-textColor leading-7">
          {contents.results.description1}
        </p>
        <p className="text-textColor leading-7">
          {contents.results.description2}
        </p>
        <div className="w-full h-[445px] rounded-3xl">
          <Image
            className="w-full h-full rounded-3xl object-cover pb-10"
            width={1000}
            height={1000}
            alt="course Image"
            src={`${contents.results.image}`}
          />
        </div>
        <hr />
      </Element>
      <Element name="reviews" className={`my-16 space-y-5 ${isScrolled ? "mt-[60px]" : ""}`}>
        <h1 className="text-4xl font-bold text-secondary">
          {contents.reviews.title}
          <div className="mt-16">
            {data.review.slice(0, 2).map((item) => (
              <div key={item.id} className="mt-5 shadow-md rounded-2xl">
                <div className="px-14 py-10">
                  <div className="lg:flex gap-10 items-center">
                    <Image
                      alt={localeText.altTextAuthor}
                      src={item.image}
                      className="h-52 w-52 rounded-full mx-auto"
                      height={1000}
                      width={1000}
                    />
                    <div className="space-y-2 text-center lg:text-left">
                      <div className="flex item-center justify-center lg:justify-normal gap-2 mt-3 md:mt-0 text-center md:text-left text-[20px] text-yellow-400">
                        {renderStars(item.ratings)}
                      </div>
                      <p className="text-textColor font-normal text-[18px]">
                        {item.say}
                      </p>
                      <div>
                        <strong className="text-secondary font-bold text-[18px]">
                          {item.name}
                        </strong>
                        <p className="text-textColor font-normal text-[18px]">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </h1>
      </Element>
    </div>
  );
};

export default Details;
