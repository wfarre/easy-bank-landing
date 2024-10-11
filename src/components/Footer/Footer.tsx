import Button from "../Button";
import FacebookIcon from "./assets/images/icon-facebook.svg?react";
import YoutubeIcon from "./assets/images/icon-youtube.svg?react";
import TwitterIcon from "./assets/images/icon-twitter.svg?react";
import PinterestIcon from "./assets/images/icon-pinterest.svg?react";
import InstagramIcon from "./assets/images/icon-instagram.svg?react";
import Logo from "./assets/images/logo.svg";

const sns = [
  {
    title: "facebook",
    logo: <FacebookIcon />,
    link: "#",
  },
  {
    title: "youtube",
    logo: <YoutubeIcon />,
    link: "#",
  },
  {
    title: "twitter",
    logo: <TwitterIcon />,
    link: "#",
  },
  {
    title: "pinterest",
    logo: <PinterestIcon />,
    link: "#",
  },
  {
    title: "instagram",
    logo: <InstagramIcon />,
    link: "#",
  },
];

const linkList = [
  [
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
  ],
  [
    {
      title: "Blog",
      link: "#",
    },
    {
      title: "Carreers",
      link: "#",
    },
    {
      title: "Privacy Policy",
      link: "#",
    },
  ],
];

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-8 text-sm text-white lg:py-10 xl:text-lg">
      <nav
        className="flex flex-col items-center gap-7 lg:mx-40 lg:flex-row lg:items-stretch lg:gap-28"
        aria-label="footer navigation"
      >
        <ul className="flex flex-col gap-6 lg:justify-between lg:gap-10">
          <li>
            <a href="#">
              <img src={Logo} alt="easy bank logo" />
            </a>
          </li>
          <li>
            <ul className="flex items-center gap-3">
              {sns.map((item) => {
                return (
                  <li>
                    <a
                      className="hover:fill-lime-green fill-white"
                      href={item.link}
                    >
                      {item.logo}
                      <span className="absolute left-0 top-0 h-0 w-0 opacity-0">
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-3 lg:h-full lg:flex-row lg:items-start lg:justify-between lg:gap-28">
          {linkList.map((list) => {
            return (
              <li>
                <ul className="flex flex-col items-center gap-3 lg:h-full lg:items-start lg:justify-between">
                  {list.map((item) => {
                    return (
                      <li className="hover:text-lime-green text-white">
                        <a href={item.link}>{item.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-6 lg:ml-auto lg:items-end lg:justify-between">
          <Button />
          <span>© Easybank. All Rights Reserved</span>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
