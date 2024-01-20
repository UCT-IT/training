"use client";
import { strings } from "@/app/assets/locales/locales";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaPhone, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MobileMenu = () => {
  const localeText = strings.navbar;
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
          aria-label="hamburger button"
          onClick={handleToggleMenu}
          className={`text-white z-50 bg-[#0F437F] hover:bg-info transition-all h-9 w-9 rounded-full grid place-items-center focus:outline-none text-[17px]`}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* mobile menu */}
      <ul
        className={`${
          isMenuOpen ? "translate-x-0 delay-100" : "translate-x-full opacity-10"
        } md:hidden fixed top-[75px] left-0 h-screen z-50 w-full bg-white  text-primary font-bold text-[18px] transition-transform ease-in-out duration-500 transform space-y-4 px-14 lg:px-0 pt-5`}
      >
        {localeText.nav.map((item) => (
          <li
            key={item.text}
            onClick={() => setMenuOpen(false)}
            className="hover:text-info transition-all"
          >
            <Link href={item.url}>{item.text}</Link>
          </li>
        ))}
        <div className="text-secondary space-y-4 font-bold py-2">
          <div className="flex items-center gap-3">
            <span className="text-[14px] h-7 w-7 rounded-full bg-tertiary text-white grid place-items-center ">
              <FaPhone />
            </span>
            <Link className="text-[16px] hover:text-info transition-all" href="tel:01996399534">
              <p>{localeText.phone}</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[14px] h-7 w-7 rounded-full bg-tertiary text-white grid place-items-center">
              <MdEmail />
            </span>
            <Link className="text-[16px] hover:text-info transition-all" href="mailto:uctitbd@gmail.com">
              <p>{localeText.email}</p>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileMenu;
