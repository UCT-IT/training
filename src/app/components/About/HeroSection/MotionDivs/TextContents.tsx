import React from "react";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";

const TextContents = () => {
  const localeText = strings.about.heroSection;

  return (
    <React.Fragment>
      <div className="responsive-container animate-fadeIn">
        <div className="lg:flex justify-between text-center lg:text-left lg:whitespace-pre-line">
          <h1 className="text-3xl md:text-6xl font-semibold text-secondary md:leading-snug font-newsreader">
            {localeText.title}
          </h1>
          <p className="font-kumbh text-textColor md:text-lg py-5">
            {localeText.description}
          </p>
        </div>
        <div className="pt-8">
          <div className="md:text-center lg:text-left">
            <Button text={localeText.btnText} variant="primary" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextContents;
