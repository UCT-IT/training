import logo from "../../../../public/images/nav/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { strings } from "../../../assets/locales/locales";
import NavbarState from "../navbarState/NavbarState";

const Navbar = () => {
  const localeText = strings.nav;
  return (
    <div className="shadow-lg py-7 lg:px-0 z-50 sticky top-0 bg-white">
      <div className="container px-5 mx-auto flex items-center justify-between text-[#0F437F] relative">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <NavbarState />
        <ul
          className={`hidden z-50 md:flex md:items-center gap-10 font-bold text-[17px]`}
        >
          {localeText.map((item) => (
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