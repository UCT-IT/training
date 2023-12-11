"use client";
import { strings } from "@/assets/locales/locales";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarState = () => {
  const localeText = strings.nav;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleMobileMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <div>
      <div
        onKeyDown={handleMobileMenuKeyDown}
        tabIndex={0}
        className="md:hidden"
      >
        <button
          onClick={handleToggleMenu}
          className={`text-white z-50 bg-[#0F437F] hover:bg-[#F9A07C] transition-all h-9 w-9 rounded-full grid place-items-center focus:outline-none text-[17px]`}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* mobile menu */}
      <ul
        className={`${
          isMenuOpen ? "translate-x-0 delay-100" : "translate-x-full opacity-10"
        } md:hidden fixed top-[85px] left-0 h-screen z-50 w-full bg-white  text-[#0F437F] font-bold text-[18px] transition-transform ease-in-out duration-500 transform space-y-4 pt-3 px-14 lg:px-0`}
      >
        {localeText.map((item) => (
          <li key={item.text} className="hover:text-[#F9A07C] transition-all">
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarState;
