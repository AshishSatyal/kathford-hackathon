import React from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Prizes from "./components/Prizes";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Partners from "./components/Partners";
import Blob from "./components/Blob";
import Footer from "./components/Footer";
// import Judges from "./components/Judges";

import { FaArrowUp } from "react-icons/fa";
// import Mentors from "./components/Mentors";

import useScrollPosition from "./hook/useScrollPosition";

const App = () => {
  const scrollValue = useScrollPosition();

  const isHidden = scrollValue >= 50;

  return (
    <>
      <div className='relative font-[archiv]'>
        <div className='cursor-pointer absolute z-0'>
          <Blob />
        </div>
        <div className='body-section relative z-10'>
          <Header isHidden={isHidden} />
          <Hero isVisible={!isHidden} />
          <Prizes />
          <Tracks />
          <Schedule />

          {/* <Judges />
          <Mentors /> */}
          <Faq />
          <Partners />
          <Footer />
          <div
            className={`text-white w-[44px] h-[44px] bg-white/20 backdrop-blur-md rounded-md fixed bottom-6 right-6 md:bottom-10 md:right-10 cursor-pointer transition-all duration-300 ease-in-out ${
              !isHidden ? "opacity-0 invisible" : ""
            }`}
          >
            <a
              href='#'
              className='w-full h-full flex items-center justify-center'
            >
              <FaArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
