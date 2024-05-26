import React from "react";
import CountDown from "./CountDown";

const Hero = () => {
  return (
    <div className='bg-color-2 min-h-[85vh] px-10 lg:px-[5rem] flex flex-col justify-center items-center'>
      <div className='w-2/3'>
        <p className='text-color-1/100 text-center lg:text-6xl text-3xl font-normal font-mono capitalize'>
          <span className='text-white font-[robotomono] uppercase block pb-2'>
            unleash your talent
          </span>
          Build the future.
        </p>
        <p className='text-white/70 text-md font-semibold text-center mt-7 font-mono'>
          Innovators and problem-solvers,unite! This hackathon <br />
          challenges you to turn your idea into solutions.
        </p>
      </div>
      <div className='my-4'>
        <CountDown />
      </div>
      <button className='m-2 p-4 text-white rounded-lg bg-color-3 border capitalize hover:bg-color-2 font-mono text-lg font-bold'>
        Reserve your spot
      </button>
    </div>
  );
};

export default Hero;
