import Image from "next/image";
import React from "react";

type ErollProps = {
  singleData: {
    price: string;
    details: {
      enroll: {
        description: string;
        btn: string;
        info: { logo: string; text: string }[];
      };
    };
  };
};

const Enroll = ({ singleData }: ErollProps) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-md md:sticky md:top-24 self-start lg:-mt-[243px] z-10 px-5 py-10 space-y-5">
      <h1 className="text-3xl font-bold text-tertiary">{singleData.price}</h1>
      <p className="text-textColor">
        Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit purus
        vivera.
      </p>
      <button
        className="font-bold px-10 py-5 bg-primary hover:bg-secondary text-white
              hover:scale-95 rounded-full uppercase text-center transition-all duration-300 w-full"
      >
        {singleData.details?.enroll.btn}
      </button>
      <div className="py-3 px-3">
        {singleData.details?.enroll.info.map((item) => (
          <div key={item.text} className="flex items-center gap-4 mt-4">
            <Image
              height={1000}
              width={1000}
              className="w-6"
              src={`${item.logo}`}
              alt="image"
            />
            <p className="text-textColor font-medium text-[17px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enroll;
