import MotionTitle from "./motionContent/MotionTitle";
import MotionHomeSlider from "./motionContent/MotionHomeSlider";
import MotionButton from "./motionContent/MotionButton";

const HomeSlider = () => {
  return (
    <div className="container mx-auto font-kumbh relative py-24">
      <MotionTitle />
      <MotionHomeSlider />
      <MotionButton />
    </div>
  );
};

export default HomeSlider;
