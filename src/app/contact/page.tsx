import React, { FormEvent } from "react";
import { strings } from "../assets/locales/locales";
import Button from "../components/common/Buttons/Button";
import { Metadata } from "next";
import { sendEmail } from "./sendEmail";
const localeText = strings.metadata.contactPage;

export const metadata: Metadata = {
  title: localeText.title,
  description: localeText.description,
};

const Contact: React.FC = () => {
  const localeText = strings.home.contactUsSection;

  return (
    <React.Fragment>
      <div className=" bg-white shadow-lg text-textColor relative overflow-clip">
        <div className="bg-info w-[100px] h-[100px] rounded-ss-full absolute right-0 bottom-0" />
        <div className="bg-warning w-[100px] h-[100px] rounded-ee-full absolute left-0 top-0" />
        <div className="responsive-container flex flex-col lg:flex-row justify-center items-center relative">
          <div className="pr-5 py-14 w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="font-semibold text-3xl mb-1">
              {localeText.titleOne}
            </h2>
            <h2 className="font-semibold text-3xl mb-1">
              {localeText.titleTwo}
            </h2>
            <h2 className="font-semibold text-3xl">{localeText.titleThree}</h2>
            <p className="text-lg my-5 whitespace-pre-line text-textColor">
              {localeText.description}
            </p>

            <hr className="w-full" />
            <div>
              <p className="font-bold mt-5">{localeText.addressTitle}</p>
              <p>
                <span className="font-semibold">{localeText.officeBd}</span>{" "}
                {localeText.officeBdAddress}
              </p>
              <p>
                <span className="font-semibold">{localeText.officeCn}</span>{" "}
                {localeText.officeCnAddress}
              </p>

              <p>
                <span className="font-semibold">{localeText.email}</span>{" "}
                {localeText.emailAddress}
              </p>

              <p>
                <span className="font-semibold">{localeText.hotline}</span>
                {localeText.hotlineNumber}
              </p>
            </div>
          </div>
          <div className="py-16 px-5 text-center lg:text-left relative z-20">
            <h2 className="text-3xl mb-3 font-semibold ps-2">
              {localeText.sendMessageTitle}
            </h2>
            <form className="px-2" onSubmit={sendEmail}>
              <input
                className="border-[2px] border-gray-400 focus:border-black bg-gray-300 placeholder-black  w-full mb-5 outline-none rounded-xl p-2"
                required
                name="userName"
                id="userName"
                type="text"
                placeholder={localeText.placeholderText.name}
              />
              <input
                className=" border-[2px] border-gray-400 focus:border-black bg-gray-300 placeholder-black w-full mb-5 outline-none rounded-xl p-2"
                required
                type="email"
                name="userEmail"
                placeholder={localeText.placeholderText.email}
              />
              <textarea
                className="border-[2px] border-gray-400 focus:border-black bg-gray-300 placeholder-black w-full mb-5 outline-none rounded-xl p-2"
                required
                name="message"
                cols={30}
                rows={10}
                placeholder={localeText.placeholderText.message}
              />
              <div className="text-right">
                <button
                  className="font-bold px-10 py-6  bg-primary hover:bg-secondary text-white
                  hover:scale-95 rounded-full uppercase text-center transition-all duration-300 w-full md:w-full lg:w-auto"
                >
                  {localeText.btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
