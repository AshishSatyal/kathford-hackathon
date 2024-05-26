import React from "react";
import second from "../assets/second.svg";
import winner from "../assets/winner.svg";
import third from "../assets/third.svg";

import Cards from "./Cards";
import PrizeBanner from "./PrizeBanner";

const Prizes = () => {
  return (
    <div className='bg-color-2 min-h-[80vh] py-5 lg:px-10'>
      <div className='my-2 text-center '>
        <p className='text-white text-3xl lg:text-5xl capitalize font-semibold font-[robotomono]'>
          prizes
        </p>
      </div>
      <div className='p-5 lg:min-w-full'>
        <p className='text-center text-slate-300 font-normal text-xl lg:text-2xl capitalize font-mono tracking-tight'>
          win from the prize pool of{" "}
          <span className='text-color-1 font-bold text-2xl'>Rs.50000</span>
        </p>
      </div>
      <div className='flex flex-col lg:flex-row lg:p-5 items-center justify-center gap-10 mt-5'>
        <Cards
          bg={"bg-gradient-to-r from-color-1 to-color-3"}
          position={"#1 Winner"}
          prize={"Rs.50000"}
          other={"medals & Certificate"}
          img={winner}
        />

        <Cards
          bg={"bg-gradient-to-r from-color-1/50 to-color-3/70"}
          position={"1st runner up"}
          prize={"Rs.15000"}
          other={"medals & Certificate"}
          img={second}
        />
        <Cards
          bg={"bg-gradient-to-r from-color-3/70 to-color-1/50"}
          position={"2nd runner up"}
          prize={"Rs.5000"}
          other={"medals & Certificate"}
          img={third}
        />
      </div>
      <PrizeBanner />
    </div>
  );
};

export default Prizes;
