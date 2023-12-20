"use client";
import { strings } from "@/app/assets/locales/locales";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ActiveRoute = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const localeTextOfCourses = strings.courses.allCourses;
  useEffect(() => {
    const currentRoute = window.location.pathname;
    const index = localeTextOfCourses.coursePage.findIndex(
      (item) => item.url === currentRoute
    );
    setActiveIndex(index !== -1 ? index : 0);
  }, []);

  const toggleColor = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="flex items-center justify-center md:justify-normal gap-7">
      {localeTextOfCourses.coursePage.map((item, index) => (
        <Link
          key={item.text}
          className={`${
            index === activeIndex
              ? "bg-primary text-white"
              : "bg-white text-tertiary border-[1px] border-btnbg"
          }  px-7 py-2 rounded-full font-bold`}
          href={item.url}
          onClick={() => toggleColor(index)}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default ActiveRoute;
