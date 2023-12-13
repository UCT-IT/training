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
import { strings } from "@/app/assets/locales/locales";

const Footer = () => {
  const localeText = strings.footer;

  return (
    <div className="bg-tertiary pt-[72px]">
      <div className="responsive-container">
        <div className="lg:flex justify-between items-center space-y-5 lg:space-y-0">
          <a href="#">
            <Image
              className="hover:scale-95 transition-all duration-200"
              src={logo}
              alt="Footer logo"
            />
          </a>
          <p className="text-textColor whitespace-pre-line">
            {localeText.description}
          </p>
        </div>
        <hr className="mt-[54px] pb-[120px] opacity-20" />
        <div className="md:flex justify-between space-y-5 md:space-y-0 md:space-x-5 lg:space-x-0">
          <div>
            <h3 className="mb-[40px] font-bold text-white">
              {localeText.ourCompany.title}
            </h3>
            <ul className="text-textColor text-lg space-y-3">
              {localeText.ourCompany.navigations.map((nav) => (
                <li
                  key={nav}
                  className="hover:text-info transition-colors duration-200"
                >
                  <a href="#">{nav}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-[40px] font-bold text-white">
              {localeText.ourServices.title}
            </h3>
            <ul className="text-textColor text-lg space-y-3">
              {localeText.ourServices.navigations.map((nav) => (
                <li
                  key={nav}
                  className="hover:text-info transition-colors duration-200"
                >
                  <a href="#">{nav}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-[40px] font-bold text-white text-left md:text-center">
              {localeText.ourOffice.title}
            </h3>
            <p className="text-textColor text-lg hover:text-info transition-colors duration-200 whitespace-pre-line text-left md:text-center">
              {localeText.ourOffice.address}
            </p>
          </div>
        </div>
        <hr className="mt-[120px] pb-[24px] opacity-20" />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-between pb-6 gap-4">
          <p className="text-btnbg text-lg">{localeText.copyRight}</p>
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
              <FaLinkedinIn className="text-lg" />
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
