import Image from "next/image";
import React from "react";

type VideoProps = {
  singleData: {
    image: string;
  };
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  thumbnail: string;
};

const Video = ({ singleData, setModalOpen, thumbnail }: VideoProps) => {
  return (
    <div>
      <div className="relative h-[380px] w-full rounded-2xl group">
      <div className="w-full rounded-2xl overflow-hidden relative h-[370px]">
        <div className="rounded-2xl h-full transition-transform transform hover:scale-110">
          <Image
            className="h-full w-full rounded-2xl object-cover transition-transform transform hover:scale-110"
            width={1000}
            height={1000}
            alt="course Image"
            src={singleData.image}
          />
          <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-black opacity-60 transition-all group-hover:opacity-40 rounded-2xl"></div>
        </div>
      </div>

      <div
        onClick={() => setModalOpen(true)}
        className="bg-white h-28 w-28 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer flex justify-center items-center transition-all scale-100 hover:scale-110"
      >
        <Image className="video-logo" alt="video" src={thumbnail} />
      </div>
    </div>
    </div>
  );
};

export default Video;
