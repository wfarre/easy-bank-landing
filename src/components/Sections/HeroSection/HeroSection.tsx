import HeroBgImageDesktop from "./assets/images/bg-intro-desktop.svg";
import HeroBgImageMobile from "./assets/images/bg-intro-mobile.svg";
import HeroImage from "./assets/images/image-mockups.png";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <section className="relative pb-20 lg:pb-0" id="hero">
      <div className="relative flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:pl-40">
        <div className="mx-auto flex max-w-96 flex-col items-center gap-8 py-12 text-center lg:mx-0 lg:items-start lg:text-left">
          <h1 className="text-dark-blue text-3xl lg:text-5xl">
            Next generation digital banking
          </h1>
          <p className="text-gray-500">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>
        <div className="absolute right-0 top-0 hidden w-full lg:right-[-15%] lg:block lg:h-full lg:w-3/4">
          <img
            className="absolute left-0 top-0 h-full w-full object-cover object-center"
            src={HeroBgImageDesktop}
            alt=""
          />
        </div>
        <div className="relative overflow-hidden lg:h-[650px] lg:w-[624px] lg:overflow-visible">
          <img
            className="absolute left-0 top-0 w-full lg:hidden"
            src={HeroBgImageMobile}
            alt=""
          />
          <div className="hero-pic relative top-0 lg:absolute lg:right-0 lg:top-[-15%]">
            <img
              className="absolute left-0 top-0 h-full w-full object-cover object-bottom lg:object-left-bottom"
              src={HeroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
