import React from "react";

const ButtonSecondary = ({ text }: { text: string }) => {
  return (
    <button className="font-kumbh font-bold px-10 py-6 bg-[#becad7] hover:bg-tertiary hover:scale-95 text-[#1E3D63] rounded-full uppercase text-center transition-all duration-300 w-full md:w-auto">
      {text}
    </button>
  );
};

export default ButtonSecondary;
