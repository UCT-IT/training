import React from "react";
import Button from "../../common/Buttons/Button";
import { strings } from "@/app/assets/locales/locales";

const ContactUs = () => {
  const locateText = strings.home.contactUsSection;

  return (
    <div className="bg-tertiary my-[184px] relative overflow-clip">
      <div className="bg-info w-[50px] h-[25px] md:w-[200px] md:h-[100px] rounded-br-full rounded-bl-full absolute top-0"></div>
      <div className="responsive-container flex flex-col lg:flex-row justify-center items-center">
        <div className="font-kumbh text-success pr-5 py-14 w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="font-semibold text-3xl mb-1">{locateText.titleOne}</h2>
          <h2 className="font-semibold text-3xl mb-1">{locateText.titleTwo}</h2>
          <h2 className="font-semibold text-3xl">{locateText.titleThree}</h2>
          <p className="text-lg my-5 whitespace-pre-line">
            {locateText.description}
          </p>

          <hr className="w-full" />
          <div className="z-30">
            <p className="font-bold mt-5">{locateText.addressTitle}</p>
            <p>
              <span className="font-semibold">{locateText.officeBd}</span>{" "}
              {locateText.officeBdAddress}
            </p>
            <p>
              <span className="font-semibold">{locateText.officeCn}</span>{" "}
              {locateText.officeCnAddress}
            </p>

            <p>
              <span className="font-semibold">{locateText.email}</span>{" "}
              {locateText.emailAddress}
            </p>

            <p>
              <span className="font-semibold">{locateText.hotline}</span>
              {locateText.hotlineNumber}
            </p>
          </div>
        </div>
        <div className="text-textColor py-16 px-5 text-center lg:text-left">
          <h2 className="text-3xl mb-3 font-semibold text-success ps-2">
            {locateText.sendMessageTitle}
          </h2>
          <form className="px-2">
            <input
              className="border-2 border-info bg-transparent text-success w-full mb-5 outline-none rounded-xl p-2"
              required
              type="text"
              placeholder="Your Name"
            />
            <input
              className=" border-2 border-info bg-transparent text-success w-full mb-5 outline-none rounded-xl p-2"
              required
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="border-2 border-info bg-transparent text-success w-full mb-5 outline-none rounded-xl p-2"
              required
              cols={30}
              rows={10}
              placeholder="Your Message Here..."
            ></textarea>
            <div className="text-right">
              <Button variant="secondary" text={locateText.btnText} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
