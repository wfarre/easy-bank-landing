import React, { useState } from "react";
import Logo from "./assets/logo.svg";
import Hamburger from "./assets/icon-hamburger.svg";
import CloseBtn from "./assets/icon-close.svg";
import Button from "../Button";

const pageLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "Careers",
    link: "#",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex h-16 items-center justify-between bg-white px-6 lg:px-40">
      <div>
        <img src={Logo} alt="easybank logo" />
      </div>

      <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={isMenuOpen ? CloseBtn : Hamburger} alt="" />
      </button>

      <ul
        className={`${
          !isMenuOpen ? "hidden" : "flex"
        } absolute left-[50%] top-20 w-80 translate-x-[-50%] flex-col items-center gap-8 rounded-md bg-pink-50 py-6 lg:relative lg:left-0 lg:top-0 lg:flex lg:h-full lg:w-auto lg:translate-x-0 lg:flex-row lg:items-center`}
      >
        {pageLinks.map((link) => {
          return (
            <li className="relative flex h-full items-center from-teal-400 to-cyan-500 text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-0 after:bg-gradient-to-r after:content-[''] hover:text-black hover:after:scale-100 lg:text-gray-200">
              <a href={link.link}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:block">
        <Button />
      </div>
    </nav>
  );
};

export default Navbar;
