import React from "react";
import logo from "../../../../../public/images/footer/logo.png";
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
import Link from "next/link";
// import { Link } from "react-scroll";

const Footer = () => {
  const localeText = strings.footer;

  return (
    <div className="bg-tertiary pt-[72px]">
      <div className="responsive-container">
        <div className="lg:flex justify-between items-center space-y-5 lg:space-y-0">
          <Link href="/">
            <Image
              className="hover:scale-95 transition-all duration-200 w-16 h-16"
              src={logo}
              alt="Footer logo"
            />
          </Link>
          <p className="text-textColor whitespace-pre-line">
            {localeText.description}
          </p>
        </div>
        <hr className="mt-[54px] pb-[120px] opacity-20" />
        <div className="md:flex justify-between space-y-5 md:space-y-0 md:space-x-5 lg:space-x-0">
          <div className="text-left lg:text-center">
            <h3 className="mb-[40px] font-bold text-white">
              {localeText.ourCompany.title}
            </h3>
            <ul className="text-textColor text-lg space-y-3">
              {localeText.ourCompany.navigations.map((nav) => (
                <li
                  key={nav.navigation}
                  className="hover:text-white transition-colors duration-200"
                >
                  <Link href={nav.url}>{nav.navigation}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left lg:text-center">
            <h3 className="mb-[40px] font-bold text-white">
              {localeText.ourServices.title}
            </h3>
            <ul className="text-textColor text-lg space-y-3">
              {localeText.ourServices.navigations.map((nav) => (
                <li
                  key={nav.navigation}
                  className="hover:text-white transition-colors duration-200"
                >
                  <Link href={nav.url}>{nav.navigation}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-left lg:text-center">
            <h3 className="mb-[40px] font-bold text-white text-left md:text-center">
              {localeText.ourOffice.title}
            </h3>
            <Link
              href="https://maps.app.goo.gl/iAbCARQc9dCSfgj97"
              target="_blank"
            >
              <p className="text-textColor text-lg hover:text-white transition-colors duration-200 whitespace-pre-line text-left md:text-center">
                {localeText.ourOffice.address}
              </p>
            </Link>
          </div>
        </div>

        <hr className="mt-[120px] pb-[24px] opacity-20" />

        <div className="flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-between pb-6 gap-4">
          <p className="text-btnbg text-lg">{localeText.copyRight}</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/uttaracomputertraininganditfirm/"
              aria-label="Facebook Page Of UCTIT"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaFacebookF className="text-lg" />
            </Link>
            {/* <Link
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaTwitter className="text-lg" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaInstagram className="text-lg" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaLinkedinIn className="text-lg" />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaYoutube className="text-lg" />
            </Link> */}
            <Link
              href=" https://wa.me/01996399534"
              aria-label="Whatsapp number Of UCTIT"
              target="_blank"
              className="p-3 bg-textColor rounded-full text-white hover:bg-primary transition-colors duration-300"
            >
              <FaWhatsapp className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
