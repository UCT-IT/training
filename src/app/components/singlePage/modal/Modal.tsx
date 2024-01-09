"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div className="fixed h-[90%] top-[93px] left-0 w-full lg:flex items-center justify-center z-[1000] ">
      <button
        onClick={onClose}
        className="text-white font-bold text-[18px] absolute top-3 right-3 cursor-pointer z-[1000]"
      >
        <RxCross2 />
      </button>
      <div className="absolute w-full h-full bg-black opacity-90 z-50"></div>
      <div className="relative z-50 mt-24 md:mt-0 ">
        {loading && (
          <button type="button" className="hidden md:flex" disabled>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </button>
        )}
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[760px] h-[415px] w-[97%] mx-auto mt-0 md:mt-10 lg:mt-0">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/w-kBRUXsuSQ?si=VTxb9Ppsg-bwDPND"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Modal;
