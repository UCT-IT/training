import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import data from "../../../../../public/data/data.json";
import { strings } from "@/app/assets/locales/locales";
import CommonCarousel from "@/app/components/common/commonCarousel/CommonCarousel";
import Button from "@/app/components/common/Buttons/Button";
import CommonCourseCard from "@/app/components/common/commonCarouselCard/CommonCourseCard";
import Link from "next/link";

const HomeSlider = () => {
  const localetext = strings.home.homeCarousel;
  const altText = {
    altCourseImg: localetext.altCourseImg,
    altAuthorImg: localetext.altAuthorImg,
  };
  return (
    <div className="container mx-auto font-kumbh relative py-32">
      <h2 className="font-bold font-newsreader text-secondary  text-center text-4xl mb-16">
        {localetext.title}
      </h2>
      <div>
        <CommonCarousel
          settings={{
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
          }}
        >
          {data.courses
            .filter((item) => item.preview === true)
            .map((item) => (
              <CommonCourseCard
                key={item.id}
                item={item}
                localetext={altText}
              />
            ))}
        </CommonCarousel>
        <div className="text-center mt-6">
          <Link href="/courses">
            <Button variant="primary" text={localetext.btn} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
