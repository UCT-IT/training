"use client";
import React, { useState } from "react";
import logo from "../../../../public/images/nav/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import data from "../../../../public/data/data.json";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  console.log(data.nav);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-lg py-7  px-5 lg:px-0 z-50 sticky top-0 bg-white">
      <div className="container px-5 mx-auto flex items-center justify-between text-[#0F437F] relative">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className={`text-white z-50 bg-[#0F437F] hover:bg-[#F9A07C] transition-all h-9 w-9 rounded-full grid place-items-center focus:outline-none text-[17px]`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`hidden z-50 md:flex md:items-center gap-10 font-bold text-[17px]`}
        >
          {data.nav.map((item) => (
            <li key={item.text} className="hover:text-[#F9A07C] transition-all">
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
        {/* mobile menu */}
        <ul
          className={`${
            isMenuOpen
              ? "translate-x-0 delay-100"
              : "translate-x-full opacity-10"
          } md:hidden fixed top-[85px] left-0 h-screen z-50 w-full bg-white  text-[#0F437F] font-bold text-[18px] transition-transform ease-in-out duration-500 transform space-y-4 pt-3 px-14 lg:px-0`}
        >
          {data.nav.map((item) => (
            <li key={item.text} className="hover:text-[#F9A07C] transition-all">
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
