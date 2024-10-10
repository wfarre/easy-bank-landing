/// <reference types="vite-plugin-svgr/client" />

import ArticleCard from "./components/ArticleCard";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar/Navbar";

import FacebookIcon from "./assets/images/icon-facebook.svg?react";
import YoutubeIcon from "./assets/images/icon-youtube.svg?react";
import TwitterIcon from "./assets/images/icon-twitter.svg?react";
import PinterestIcon from "./assets/images/icon-pinterest.svg?react";
import InstagramIcon from "./assets/images/icon-instagram.svg?react";
import Button from "./components/Button";

const articles = [
  {
    title: "Receive money in any currency with no fees",
    author: "Claire Robinson",
    content:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    picture: "/assets/images/image-currency.jpg",
  },
  {
    title: "Treat yourself without worrying about money",
    author: "Wilson Hutton",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    picture: "/assets/images/image-restaurant.jpg",
  },
  {
    title: "Take your Easybank card wherever you go",
    author: "Wilson Hutton",
    content:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    picture: "/assets/images/image-plane.jpg",
  },
  {
    title: "Our invite-only Beta accounts are now live!",
    author: "Claire Robinson",
    content:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    picture: "/assets/images/image-confetti.jpg",
  },
];

const sns = [
  {
    logo: <FacebookIcon />,
    link: "#",
  },
  {
    logo: <YoutubeIcon />,
    link: "#",
  },
  {
    logo: <TwitterIcon />,
    link: "#",
  },
  {
    logo: <PinterestIcon />,
    link: "#",
  },
  {
    logo: <InstagramIcon />,
    link: "#",
  },
];

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="overflow-x-hidden bg-gray-50">
        <HeroSection />
        <FeaturesSection />

        <section className="px-6 pb-20 pt-24 lg:px-40" id="articles">
          <h2 className="mb-12 text-4xl">Latest Articles</h2>
          <div className="flex justify-between">
            {articles.map((article) => (
              <ArticleCard
                title={article.title}
                content={article.content}
                author={article.author}
                picture={article.picture}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 py-8 text-white lg:py-10">
        <nav className="flex flex-col items-center gap-7 lg:mx-40 lg:flex-row lg:gap-28">
          <div className="flex flex-col gap-6 lg:gap-10">
            <div>
              <img src={"/assets/images/logo.svg"} alt="" />
            </div>
            <ul className="flex items-center gap-3">
              {sns.map((item) => {
                return (
                  <li>
                    <a
                      className="fill-white hover:fill-teal-400"
                      href={item.link}
                    >
                      {item.logo}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-28">
            <li>
              <ul className="flex flex-col items-center gap-3 lg:items-start">
                <li>
                  <a href="http://">Home</a>
                </li>
                <li>
                  <a href="http://">About</a>
                </li>
                <li>
                  <a href="http://">Contact</a>
                </li>
              </ul>
            </li>

            <li>
              <ul className="flex flex-col items-center gap-3 lg:items-start">
                <li>
                  <a href="http://">Blog</a>
                </li>
                <li>
                  <a href="http://">Careers</a>
                </li>
                <li>
                  <a href="http://">Pivacy Policy</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="flex flex-col gap-6 lg:ml-auto lg:gap-10">
            <Button />
            <span>© Easybank. All Rights Reserved</span>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;

{
  /* About Us
  Contact
  Blog
  Careers
  Support
  Privacy Policy

  Request Invite

}

{
  /* <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
  </div> */
}
