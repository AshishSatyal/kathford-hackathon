import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Prizes from './components/Prizes';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Ourteam from './components/Ourteam';
import Partners from './components/Partners';
import Blob from './components/Blob';
import Footer from './components/Footer';

import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(() => (window.scrollY > 50) ? true : false);
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  return (
    <>
      <div className="relative">
        <div className="cursor-pointer absolute z-0">
          <Blob />
        </div>
        <div className="body-section relative z-10">
          <Header />
          <Hero />
          <Prizes />
          <Tracks />
          <Schedule />
          <Ourteam />
          <Faq />
          <Partners />
          <Footer />
          {isVisible && <div className="text-white w-[44px] h-[44px] bg-white/20 backdrop-blur-md rounded-md fixed bottom-6 right-6 md:bottom-10 md:right-10 cursor-pointer">
            <a href="#" className='w-full h-full flex items-center justify-center'><FaArrowUp size={20} /></a>
          </div> }
        </div>
      </div>
    </>
  );
};

export default App;
