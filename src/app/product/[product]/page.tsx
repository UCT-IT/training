import data from "../../../../public/data/data.json";
import HeroSection from "@/app/components/singlePage/heroSection/HeroSection";
import Details from "@/app/components/singlePage/details/Details";
import Enroll from "@/app/components/singlePage/enroll/Enroll";
import ModalVideo from "@/app/components/singlePage/modalVideo/ModalVideo";

const ProductPage = ({ params }: { params: { product?: string } }) => {
  if (!params.product) {
    return <p>Product not found</p>;
  }

  const singleData = data.courses.find(
    (item) => item.product === params.product
  );

  if (!singleData) {
    return <p>Product data not found</p>;
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
