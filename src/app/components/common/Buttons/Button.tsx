import React from "react";

type buttonProps = {
  text: string;
  variant: string;
};

const Button = ({ text, variant }: buttonProps) => {
  return (
    <button
      className={`font-kumbh font-bold px-10 py-6 ${
        variant === "primary"
          ? "bg-primary hover:bg-secondary text-white"
          : "bg-btnbg hover:bg-btnhover text-tertiary"
      } hover:scale-95 rounded-full uppercase text-center transition-all duration-300 w-full md:w-auto`}
    >
      {text}
    </button>
  );
};

export default Button;
