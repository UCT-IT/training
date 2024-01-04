import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Button from "../../common/Buttons/Button";
import data from "../../../../../public/data/data.json";
import CommonCarousel from "../../common/commonCarousel/CommonCarousel";
import CommonCarouselCard from "../../common/commonCarouselCard/CommonCourselCard";
import { strings } from "@/app/assets/locales/locales";

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
              <CommonCarouselCard item={item} localetext={altText} />
            ))}
        </CommonCarousel>
        <div className="text-center mt-6">
          <Button variant="primary" text={localetext.btn} />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
