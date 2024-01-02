import Image from "next/image";
import Link from "next/link";
import React from "react";

type CommonCarouselCardProps = {
  item: {
    image: string;
    duration: string;
    price: string;
    title: string;
    description: string;
    author: {
      image: string;
      name: string;
    };
  };
  localetext: {
    altCourseImg: string;
    altAuthorImg: string;
  };
};

const CommonCourseCard = ({ item, localetext }: CommonCarouselCardProps) => {
  return (
    <div className="group mt-3">
        <div className="rounded-3xl mr-[20px] border-[1px] h-[650px] border-gray-200 shadow-3xl transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
      <Link href="#">
        <div className="overflow-hidden rounded-t-3xl relative">
          <Image
            height={1000}
            width={1000}
            className="h-full w-full object-cover duration-150 transition-all group-hover:scale-110"
            src={item.image}
            alt={localetext.altCourseImg}
          />
          <div className="absolute top-10 right-10 flex items-center gap-2 text-[15px]">
            <p className="bg-white text-secondary py-3 px-6 rounded-full font-semibold ">
              {item.duration}
            </p>
            <p className="text-white bg-secondary py-3 px-6 rounded-full font-semibold ">
              {item.price}
            </p>
          </div>
        </div>
        <div className="p-12 bg-white rounded-b-3xl">
          <h1 className="font-bold text-2xl text-secondary group-hover:text-primary transition-all">
            {item.title}
          </h1>
          <p className="text-[18px] mt-4 text-[#798BA0]">{item.description}</p>
          <div className="mt-6 flex items-center gap-4">
    <div className="group p-2">
      <div className="rounded-3xl mx-auto border-[1px] h-[650px] border-gray-200 shadow-3xl transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
        <Link href="#">
          <div className="overflow-hidden rounded-t-3xl relative">
            <Image
              height={1000}
              width={1000}
              className="h-full w-full object-cover duration-150 transition-all group-hover:scale-110"
              src={item.image}
              alt={localetext.altCourseImg}
            />
            <div className="absolute top-10 right-10 flex items-center gap-2 text-[15px]">
              <p className="bg-white text-secondary py-3 px-6 rounded-full font-semibold ">
                {item.duration}
              </p>
              <p className="text-white bg-secondary py-3 px-6 rounded-full font-semibold ">
                {item.price}
              </p>
            </div>
          </div>
          <div className="p-5  rounded-b-3xl">
            <h1 className="font-bold text-2xl text-secondary group-hover:text-primary transition-all">
              {item.title}
            </h1>
            <p className="text-[18px] mt-4 text-[#798BA0]">
              {item.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                className="h-11 w-11 shadow-lg rounded-full"
                alt={localetext.altAuthorImg}
                src={item.author.image}
                width={1000}
                height={1000}
              />
              <p className="font-bold text-xl text-[#1E3D60]">
                {item.author.name}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CommonCourseCard;
