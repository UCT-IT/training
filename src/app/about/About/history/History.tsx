import React from "react";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";
import Link from "next/link";

const History = () => {
  const localeText = strings.about.history;
  return (
    <div className="py-40 bg-[#F9FAFB]">
      <div className="responsive-container grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="relative md:sticky md:top-24 self-start">
          <h1 className="text-[38px] font-bold  text-secondary">
            {localeText.title}
          </h1>
          <p className="font-medium text-textColor text-[19px] my-7">
            {localeText.description}
          </p>
          <Link href="/courses">
            <Button variant="primary" text={localeText.button} />
          </Link>
        </div>
        <div className="flex gap-14">
          <div
            style={{ height: "calc(100% - 75px)" }}
            className="w-[1px] bg-btnhover relative"
          ></div>
          <div>
            {localeText.details.map((item) => (
              <div key={item.year} className="space-y-4 mb-20 relative">
                <div className="bg-info h-6 w-6 rounded-full absolute top-4 -left-[68px]"></div>
                <p
                  className="border-[1px] border-btnhover bg-white shadow-sm p-3 w-28 grid place-items-center rounded-full text-tertiary font-bold
                        text-[20px]"
                >
                  {item.year}
                </p>
                <p className="text-tertiary font-bold text-[25px]">
                  {item.title}
                </p>
                <p className="font-medium text-textColor text-[18px] leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
