import React from "react";
import MotionCircle from "./motionContents/MotionCircle";
import Link from "next/link";
import Image from "next/image";
import { strings } from "@/app/assets/locales/locales";

type HeroProps = {
  singleData: {
    category: string;
    details: {
      heroSection: {
        title: string;
        description: string;
        logo: string
      };
    };
  };
};

const HeroSection = ({ singleData }: HeroProps) => {
  const { title, description, logo } = singleData.details.heroSection;
  const altText = strings.product.altText.categoryLogo
  return (
    <React.Fragment>
      <div className="relative z-10 overflow-hidden pt-32 pb-48 bg-tertiary text-white">
        <MotionCircle />
        <div className="responsive-container">
          <div className="space-y-6">
            <Link href={`/category/${singleData.category}`}>
              <button className="text-tertiary flex capitalize items-center gap-1 bg-white px-7 py-3 rounded-full font-bold transition-all scale-100 hover:scale-95">
                <Image className="w-3" height={1000} width={1000} src={`${logo}`} alt={altText}/>
                {singleData.category}
              </button>
            </Link>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
