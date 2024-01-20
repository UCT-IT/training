import React from "react";
import { strings } from "./assets/locales/locales";
import Button from "./components/common/Buttons/Button";
import Link from "next/link";

const NotFound = () => {
  const localeText = strings.errorPage;
  return (
    <div className="relative z-10 overflow-hidden py-[75px] lg:py-[125px]">
      <div className="bg-warning w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-bl-full -z-10 absolute top-0 right-0" />
      <div
        className={`bg-info w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-tr-full absolute left-0 bottom-0 -z-10`}
      />
      <div className="responsive-container flex flex-col-reverse lg:flex-row justify-between">
        <div>
          <div className="text-center lg:text-left">
            <p className="text-textColor text-xl md:text-2xl pb-4">
              {localeText.title}
            </p>
            <h2 className="text-3xl md:text-[40px] font-semibold text-secondary leading-tight lg:whitespace-pre-line">
              {localeText.description}
            </h2>
          </div>
          <div className="pt-10 flex flex-col md:flex-row justify-center lg:justify-normal items-center gap-5">
            <Link className="w-full md:w-auto" href="/courses">
              <Button text={localeText.btnText1} variant="primary" />
            </Link>
            <Link className="w-full md:w-auto" href="/">
              <Button text={localeText.btnText2} variant="secondary" />
            </Link>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-[110px] lg:text-[240px] text-secondary font-semibold">
            {localeText.errorCode}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
