"use client"
import React, { useState } from "react";
import Modal from "../modal/Modal";
import Video from "../video/Video";
import video from "../../../../../public/images/singleCategory/video.svg";
import data from "../../../../../public/data/data.json"

const ModalVideo = ({ params }: { params: { course?: string } }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  if (!params.course) {
    return <p>course not found</p>;
  }

  const singleData = data.courses.find(
    (item) => item.course === params.course
  );

  if (!singleData) {
    return <p>course data not found</p>;
  }
  return (
    <React.Fragment>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Video
        singleData={singleData}
        setModalOpen={setModalOpen}
        thumbnail={video}
      />
    </React.Fragment>
  );
};

export default ModalVideo;
