import React from "react";
import { strings } from "@/app/assets/locales/locales";
import Button from "@/app/components/common/Buttons/Button";

const TextContents = () => {
  const localeText = strings.home.heroSection;

  return (
    <React.Fragment>
      <div className="animate-fadeIn">
        <h1 className="text-6xl font-semibold text-secondary font-newsreader">
          {localeText.title}
        </h1>
        <p className="font-kumbh text-tertiary py-5">
          {localeText.description}
        </p>
        <div className="space-y-6 md:space-x-6">
          <Button text={localeText.btnText1} variant="primary" />
          <Button text={localeText.btnText2} variant="secondary" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextContents;
