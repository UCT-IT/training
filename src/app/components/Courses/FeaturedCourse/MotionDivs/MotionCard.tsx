import React from "react";
import Image from "next/image";
import data from "../../../../../../public/data/data.json";
import Link from "next/link";
import { strings } from "@/app/assets/locales/locales";

const MotionCard = () => {
  const courseDetails = data.featuredCourse;
  const localeText = strings.courses.featuredCourse;
  return (
    <div className="group">
      <Link href={`/course/${courseDetails.course.toLowerCase()}`}>
        <div className="flex flex-col lg:flex-row items-center rounded-3xl shadow-xl transition-all duration-300 transform translate-y-0 group-hover:-translate-y-2">
          <div className="overflow-hidden rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl relative">
            <Image
              className="h-full w-full object-cover duration-150 transition-all group-hover:scale-110 rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl"
              src={courseDetails.courseImage}
              alt={localeText.altTextThumbnail}
              height={1000}
              width={1000}
            />
            <div className="absolute top-5 left-5 flex items-center gap-2 text-[15px]">
              <p className="bg-white text-secondary py-3 px-6 rounded-full font-semibold">
                {courseDetails.courseDuration}
              </p>
              <p className="text-white bg-secondary py-3 px-6 rounded-full font-semibold">
                {courseDetails.courseStatus}
              </p>
            </div>
          </div>
          <div className="p-5 lg:p-12 bg-white rounded-r-3xl">
            <h1 className="font-bold text-2xl text-secondary group-hover:text-primary transition-all">
              {courseDetails.courseTitle}
            </h1>
            <p className="text-[18px] mt-4 text-[#798BA0]">
              {courseDetails.courseDescription}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                className="h-11 w-11 shadow-lg rounded-full"
                alt={localeText.altTextInstructorImage}
                src={courseDetails.instructorImage}
                height={1000}
                width={1000}
              />
              <p className="font-bold text-xl text-[#1E3D60]">
                {courseDetails.instructorName}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MotionCard;
