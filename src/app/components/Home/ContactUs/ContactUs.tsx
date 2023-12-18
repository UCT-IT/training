import React from "react";
import Button from "../../common/Buttons/Button";
import { strings } from "@/app/assets/locales/locales";

const ContactUs = () => {
  const localeText = strings.home.contactUsSection;

  return (
    <div className="bg-tertiary my-[184px] relative overflow-clip">
      <div className="bg-info w-[100px] h-[100px] rounded-ss-full absolute right-0 bottom-0"></div>
      <div className="bg-warning w-[100px] h-[100px] rounded-ee-full absolute left-0 top-0"></div>
      <div className="responsive-container flex flex-col lg:flex-row justify-center items-center relative">
        <div className="font-kumbh text-success pr-5 py-14 w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="font-semibold text-3xl mb-1">{localeText.titleOne}</h2>
          <h2 className="font-semibold text-3xl mb-1">{localeText.titleTwo}</h2>
          <h2 className="font-semibold text-3xl">{localeText.titleThree}</h2>
          <p className="text-lg my-5 whitespace-pre-line">
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
        <div className="text-textColor py-16 px-5 text-center lg:text-left relative z-20">
          <h2 className="text-3xl mb-3 font-semibold text-success ps-2">
            {localeText.sendMessageTitle}
          </h2>
          <form className="px-2">
            <input
              className="border-2 border-success focus:border-info bg-transparent text-success w-full mb-5 outline-none rounded-xl p-2"
              required
              type="text"
              placeholder={localeText.placeholderText.name}
            />
            <input
              className=" border-2 border-success focus:border-info bg-transparent text-success w-full mb-5 outline-none rounded-xl p-2"
              required
              type="email"
              placeholder={localeText.placeholderText.email}
            />
            <textarea
              className="border-2 border-success focus:border-info bg-transparent text-success w-full mb-5 outline-none rounded-xl p-2"
              required
              cols={30}
              rows={10}
              placeholder={localeText.placeholderText.message}
            />
            <div className="text-right">
              <Button variant="secondary" text={localeText.btnText} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
