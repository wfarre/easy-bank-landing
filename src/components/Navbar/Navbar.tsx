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
    <>
      <nav className="relative left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-6 lg:relative lg:px-40">
        <div>
          <img src={Logo} alt="easybank logo" />
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={isMenuOpen ? CloseBtn : Hamburger} alt="" />
        </button>

        <ul
          className={`${
            !isMenuOpen ? "hidden" : "flex"
          } absolute left-[50%] top-20 w-80 translate-x-[-50%] flex-col items-center gap-8 rounded-md bg-white py-6 lg:relative lg:left-0 lg:top-0 lg:flex lg:h-full lg:w-auto lg:translate-x-0 lg:flex-row lg:p-0`}
        >
          {pageLinks.map((link) => {
            return (
              <li className="after:from-lime-green after:to-bright-cyan relative flex h-full items-center text-sm text-black after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-0 after:bg-gradient-to-r after:content-[''] hover:text-black hover:after:scale-100 lg:text-gray-200">
                <a href={link.link}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="contents-[' '] from-dark-blue fixed left-0 top-0 z-40 h-[100vh] w-full bg-gradient-to-b to-transparent opacity-90"></div>
      )}
    </>
  );
};

export default Navbar;
