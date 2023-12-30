'use client'
import { strings } from '@/app/assets/locales/locales';
import React from 'react';
import data from "../../../../../public/data/data.json";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Categories = () => {
  const localeTextOfCourses = strings.courses.allCourses;
  const sortedUniqueCategories = Array.from(
    new Set<string>(data.courses.map((item) => item.category))
  );
  const pathName = usePathname()
  const pathParts = pathName.split('/');
  const isActive = pathParts[pathParts.length - 1]
    return (
        <div className="flex items-center justify-center md:justify-normal gap-7">
            <Link
              className={`${isActive === "courses"? 'text-white bg-tertiary': 'bg-white text-tertiary'} text-tertiary capitalize border-[1px] border-btnhover px-7 py-2 hover:bg-tertiary hover:text-white transition-all rounded-full font-bold`}
              href={localeTextOfCourses.Category.url}
            >
              {localeTextOfCourses.Category.text}
            </Link>
            {sortedUniqueCategories.map((item) => (
              <Link
                key={item}
                className={`${isActive === item.toLowerCase()? 'text-white bg-tertiary': 'bg-white text-tertiary'} text-tertiary capitalize border-[1px] border-btnhover px-7 py-2 hover:bg-tertiary hover:text-white transition-all rounded-full font-bold`}
                href={`/category/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </div>
    );
};

export default Categories;