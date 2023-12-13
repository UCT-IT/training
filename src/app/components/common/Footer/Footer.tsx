import React from "react";
import logo from "../../../../../public/images/footer/logo-white.svg";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-tertiary pt-[72px]">
      <div className="responsive-container">
        <div className="flex justify-between items-center">
          <a href="#">
            <Image
              className="hover:scale-95 transition-all duration-200"
              src={logo}
              alt="Footer logo"
            />
          </a>
          <p className="text-textColor whitespace-pre-line">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt aliqua.`}
          </p>
        </div>
        <hr className="mt-[54px] pb-[120px] opacity-20" />
        <div className="flex justify-center items-start gap-32">
          <div>
            <h3 className="mb-[40px] font-bold text-white">Pages</h3>
            <div className="flex justify-between gap-32">
              <ul className="text-textColor text-lg space-y-3 ">
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">About</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Courses</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Individual Course</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Blog</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Blog Post</a>
                </li>
              </ul>
              <ul className="text-textColor text-lg space-y-3">
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Events</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Individual Event</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Teachers</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Individual Teacher</a>
                </li>
                <li className="hover:text-info transition-colors duration-200">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-[40px] font-bold text-white">Utility pages</h3>
            <ul className="text-textColor text-lg space-y-3 ">
              <li className="hover:text-info transition-colors duration-200">
                <a href="#">Start Here</a>
              </li>
              <li className="hover:text-info transition-colors duration-200">
                <a href="#">Style Guide</a>
              </li>
              <li className="hover:text-info transition-colors duration-200">
                <a href="#">404 Not Found</a>
              </li>
              <li className="hover:text-info transition-colors duration-200">
                <a href="#">Password Protected</a>
              </li>
              <li className="hover:text-info transition-colors duration-200">
                <a href="#">Licenses</a>
              </li>
              <li className="hover:text-info transition-colors duration-200">
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-[120px] pb-[24px] opacity-20" />
        <div className="flex items-center justify-between pb-6">
          <p className="text-btnbg text-lg">{`Copyright © Educationic X | Designed by BRIX Templates - Powered by Webflow`}</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaYoutube className="text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
