/// <reference types="vite-plugin-svgr/client" />

import FeaturesSection from "./components/Sections/FeaturesSection/FeaturesSection";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import ArticlesSection from "./components/Sections/ArticlesSection/ArticlesSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="bg-bg-primary overflow-x-hidden">
        <HeroSection />
        <FeaturesSection />
        <ArticlesSection />
      </main>

      <Footer />
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
