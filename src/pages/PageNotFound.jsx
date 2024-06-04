import React from 'react'

import { motion } from "framer-motion";
import { LampContainer } from '../components/Lamp';

import errorSvg from '../assets/404-01.svg';

import { RiArrowGoBackLine } from "react-icons/ri";

/* NOTE: to contain
    1. svg
    2. redirection btn to home page...
    3. Lamp effect from framer-motion ( optional )
*/

const PageNotFound = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className='relative'>
          <img 
            src={ errorSvg } 
            alt="" 
            className='h-[144px] w-auto'
          />
          <div 
          style={{width: 'max-content'}}
          className="text-white h-[44px] bg-white/20 backdrop-blur-md rounded-md cursor-pointer text-[14px] md:text-[16px] px-4 absolute bottom-[-50%] right-[50%] translate-x-[50%] translate-y-[50%]">
            <a
              href="/"
              className="w-full h-full flex items-center justify-center gap-4"
            >
              <RiArrowGoBackLine size={16} />
              <span>Go back</span>
            </a>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  )
}

export default PageNotFound