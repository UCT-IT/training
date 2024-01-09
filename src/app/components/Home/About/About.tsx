import React from "react";
import aboutImg from "../../../../../public/images/Home/About/home-about.jpg";
import iconOne from "../../../../../public/images/Home/About/icon-1-home-about.svg";
import iconTwo from "../../../../../public/images/Home/About/icon-2-home-about.svg";
import iconThree from "../../../../../public/images/Home/About/icon-3-home-about.svg";
import { strings } from "@/app/assets/locales/locales";
import Button from "../../common/Buttons/Button";
import Image from "next/image";

const About = () => {
  const localeText = strings.home.aboutSection;
  return (
    <div className="responsive-container">
      <div className="text-center mb-14">
        <h2 className="text-secondary text-4xl mb-4 font-semibold font-newsreader ">
          {localeText.title}
        </h2>
        <p className="font-kumbh text-textColor text-lg leading-6 whitespace-pre-line">
          {localeText.description}
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-14">
        <div className="w-full lg:max-w-[48%] rounded-3xl lg:mr-8">
          <Image
            className="max-w-full rounded-3xl"
            src={aboutImg}
            alt={localeText.aboutDetails.altText}
          />
        </div>
        <div className="font-kumbh mb-8 lg:mb-0">
          <div className="md:flex justify-center items-center gap-8 mb-[52px] space-y-5">
            <div>
              <Image
                className="mx-auto w-[60px] min-w-[60px] min-h-[60px] rounded-full"
                src={iconOne}
                alt={localeText.aboutDetails.iconAltText}
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-tertiary text-2xl font-bold mb-2">
                {localeText.aboutDetails.detailOne.title}
              </h3>
              <p className="text-textColor text-lg leading-6 whitespace-pre-line">
                {localeText.aboutDetails.detailOne.description}
              </p>
            </div>
          </div>
          <div className="md:flex justify-center items-center gap-8 mb-[52px] space-y-5">
            <div>
              <Image
                className="mx-auto w-[60px] min-w-[60px] min-h-[60px] rounded-full"
                src={iconTwo}
                alt={localeText.aboutDetails.iconAltText}
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-tertiary text-2xl font-bold mb-2">
                {localeText.aboutDetails.detailTwo.title}
              </h3>
              <p className="text-textColor text-lg leading-6 whitespace-pre-line">
                {localeText.aboutDetails.detailTwo.description}
              </p>
            </div>
          </div>
          <div className="md:flex justify-center items-center gap-8 space-y-5">
            <span>
              <Image
                className="mx-auto w-[60px] min-w-[60px] min-h-[60px] rounded-full"
                src={iconThree}
                alt={localeText.aboutDetails.iconAltText}
              />
            </span>
            <div className="text-center md:text-left">
              <h3 className="text-tertiary text-2xl font-bold mb-2">
                {localeText.aboutDetails.detailThree.title}
              </h3>
              <p className="text-textColor text-lg leading-6 whitespace-pre-line">
                {localeText.aboutDetails.detailThree.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Button variant="secondary" text={localeText.btnText} />
      </div>
    </div>
  );
};

export default About;
