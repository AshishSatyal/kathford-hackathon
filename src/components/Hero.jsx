import React from "react";
import CountDown from "./CountDown";
import ButtonWithIcon from "./ButtonWithIcon";

import discord from "/src/assets/discord.svg";

const Hero = () => {
  return (
    <div className="h-[50rem] w-full  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=' min-h-[100dvh] px-10 lg:px-[5rem] flex flex-col justify-center items-center'>
        <div className=''>
          <p className='gradient-text text-color-1/100 text-center text-xl md:text-3xl lg:text-6xl font-normal capitalize text-top'>
            <span className='text-white uppercase block pb-2 hero-text text-3xl md:text-7xl'>
              unleash your talent
            </span>
            <span>Build the future.</span>
          </p>
          <p className='text-white/70 text-md font-semibold text-center mt-12 '>
            Innovators and problem-solvers,unite! This hackathon <br />
            challenges you to turn your idea into solutions.
          </p>
        </div>
        <div className='my-4'>
          <CountDown />
        </div>
        {/* <button className=' register m-2 p-4 text-white rounded-lg bg-color-3 capitalize hover:bg-color-2 font-mono text-lg font-bold'>
          Discord
        </button> */}
        {/* <Button label={ "discord" } /> */}
        <ButtonWithIcon icon={discord} label={"discord"}/>
      </div>
    </div>
  );
};

export default Hero;
