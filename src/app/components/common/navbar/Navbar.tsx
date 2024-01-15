import logo from "../../../../../public/images/nav/logo.webp";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "../mobileMenu/MobileMenu";
import { strings } from "@/app/assets/locales/locales";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const localeText = strings.navbar;
  return (
    <div className="shadow-lg pt-3 lg:px-0 z-50 sticky top-0 bg-white">
      <div className="responsive-container px-5">
        <div className="flex items-center justify-between text-primary relative">
          <Link href="/">
            <Image className="w-16 h-16" src={logo} alt="logo" />
          </Link>
          <MobileMenu />
          <ul
            className={`hidden z-50 md:flex md:items-center gap-10 font-bold text-[17px]`}
          >
            {localeText.nav.map((item) => (
              <li key={item.text} className="hover:text-info transition-all">
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-tertiary hidden md:block">
        <div className="flex gap-5 justify-end responsive-container font-medium text-white ">
          <div className="flex items-center gap-2">
            <span className="text-sm">
              <FaPhone />
            </span>
            <Link className="text-sm" href="tel:01996399534">
              <p>{localeText.phone}</p>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-md">
              <MdEmail />
            </span>
            <Link className="text-sm" href="mailto:uctitbd@gmail.com">
              <p>{localeText.email}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
