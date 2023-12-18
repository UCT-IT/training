import React from "react";
import { strings } from "@/app/assets/locales/locales";

const TextContents = () => {
  const localeText = strings.courses.heroSection;

  return (
    <React.Fragment>
      <div className="responsive-container text-center animate-fadeIn">
        <h1 className="text-5xl font-semibold text-tertiary md:leading-snug font-newsreader">
          {localeText.title}
        </h1>
        <p className="font-kumbh text-textColor text-lg py-3 md:py-5 md:whitespace-pre-line">
          {localeText.description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default TextContents;
