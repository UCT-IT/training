import React from "react";

const ButtonPrimary = ({ text }: { text: string }) => {
  return (
    <button className="font-kumbh font-bold px-10 py-6 bg-primary hover:bg-secondary hover:scale-95 text-white rounded-full uppercase text-center transition-all duration-300 w-full md:w-auto">
      {text}
    </button>
  );
};

export default ButtonPrimary;
