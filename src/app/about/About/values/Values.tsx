import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";
import img1 from "/public/images/about/values/img1.svg";
import img2 from "/public/images/about/values/img2.svg";
import img3 from "/public/images/about/values/img3.svg";
import img4 from "/public/images/about/values/img4.svg";
const Values = () => {
  const localeText = strings.about.values;
  const images = [img1, img2, img3, img4];
  return (
    <div className="bg-secondary py-40 ">
      <div>
        <h3 className="text-white font-bold text-5xl  text-center">
          {localeText.title}
        </h3>
        <p className="text-white text-center mt-7 leading-7 font-medium text-[18px]">
          {localeText.description}
        </p>
      </div>
      <div className="container mx-auto px-5 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {localeText.cards.map((item, index) => (
          <div key={item.number} className="bg-white p-16 rounded-2xl">
            <div className="flex justify-between items-center">
              <Image
                className="rounded-full h-16 w-16"
                alt={localeText.altText}
                src={images[index] ?? img1}
              />
              <div>
                <p className="py-2 px-5 text-tertiary font-bold text-[18px] border-[1px] border-btnbg rounded-full">
                  {item.number}
                </p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-tertiary my-5">
              {item.title}
            </h3>
            <p className="text-[19px] font-medium text-textColor leading-8 lg:whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
