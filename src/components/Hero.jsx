import React from "react";
import CountDown from "./CountDown";

const Hero = () => {
  return (
    <div className='bg-color-4 min-h-[83vh] px-10 lg:px-[5rem] flex flex-col justify-center items-center'>
      <div className='w-2/3'>
        <p className='text-color-1/100 text-center text-5xl font-normal font-mono capitalize'>
          <span className='text-white font-[robotomono] uppercase block pb-2'>
            unleash your talent
          </span>
          Build the future.
        </p>
        <p className='text-white/70 text-sm font-semibold text-center mt-7 font-mono'>
          Innovators and problem-solvers,unite! This hackathon <br />
          challenges you to turn your idea into solutions.
        </p>
      </div>
      <div className='mt-5'>
        <CountDown />
      </div>
    </div>
  );
};

export default Hero;
