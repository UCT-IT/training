import data from "../../../../public/data/data.json";
import { Metadata } from "next";
import HeroSection from "./singlePage/heroSection/HeroSection";
import ModalVideo from "./singlePage/modalVideo/ModalVideo";
import Details from "./singlePage/details/Details";
import Enroll from "./singlePage/enroll/Enroll";
import NotFound from "@/app/not-found";

type metaProps = {
  params: { course: string };
};

export const generateMetadata = ({ params }: metaProps): Metadata => {
  const singleData = data.courseDetails.find(
    (item) => item.course.toLowerCase() === params.course?.toLowerCase()
  );

  return {
    title: singleData?.title ?? "Course Not Found",
    description: singleData?.description,
  };
};

const ProductPage = ({ params }: { params: { course: string } }) => {
  if (!params.course) {
    return <NotFound />;
  }

  const singleData = data.courseDetails.find(
    (item) => item.course.toLowerCase() === params.course?.toLowerCase()
  );

  if (!singleData) {
    return <NotFound />;
  }

  return (
    <div className="relative">
      <HeroSection singleData={singleData} />
      <div className="responsive-container relative -top-40 z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12 relative">
          <div className="lg:col-span-2">
            <ModalVideo params={params} />
            <Details singleData={singleData} />
          </div>
          <Enroll singleData={singleData} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
