import React, { useRef } from "react";
import { variantNav } from "../utils/variants";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "./EverVaultCard";
const Cards = ({ position, prize, other, img }) => {
  return (
    <motion.div
      className={`p-5 sm:h-72[] lg:h-60[] rounded-xl w-[70%] lg:w-[35%] box-card -z-0`}
      initial='offscreen'
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
      variants={variantNav}
    >
      {/* <div className='flex flex-col items-start px-5 h-[100%]'>
        <div className='flex items-center[x] justify-between'>
          <p className='font-bold text-4xl  text-slate-200 capitalize'>
            {position}
          </p>
          <img
            src={img}
            alt='winner'
            width={50}
            height={20}
            className='self-start'
          />
        </div>
        <div className='mt-auto'>
          <p className='text-white pt-5 font-bold text-2xl'>{prize}</p>
          <p className='text-white pt-5 text-2xl'>{other}</p>
        </div>
      </div> */}

      <div className='border cursor-none z-10 border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
        <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
        <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
        <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
        <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

        <EvervaultCard text={position} />
        <img
          src={img}
          alt=''
          width={75}
          height={100}
          className='absolute top-4 left-4 '
        />

        <h2 className='dark:text-white mt-4 text-2xl font-semibold font-[archiv]'>
          {prize}
        </h2>
        <h2 className='dark:text-white mt-4 text-2xl  font-[archiv]'>
          {other}
        </h2>
      </div>
    </motion.div>
  );
};
export default Cards;
