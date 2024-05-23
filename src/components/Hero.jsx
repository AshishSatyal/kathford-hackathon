import React from "react";

const Hero = () => {
  return (
    <div className='min-h-[83vh] px-10 lg:px-[5rem] flex justify-center items-center'>
      <div className='w-2/3'>
        <p className='text-color-1/100 text-center text-5xl font-normal font-mono capitalize'>
          <span className='text-white font-[robotomono] uppercase'>
            unleash your talent,
          </span>
          <br /> Build the future.
        </p>
        <p className='text-white/70 text-md font-semibold text-center mt-7'>
          Innovators and problem-solvers,unite! This hackathon <br />
          challenges you to turn your idea into solutions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
