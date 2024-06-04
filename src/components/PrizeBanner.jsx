import React from "react";
import gift1 from "../assets/gift1.svg";
import gift2 from "../assets/gift2.svg";
import { motion } from "framer-motion";
import { variantNav } from "../utils/variants";
const PrizeBanner = () => {
  return (
    <motion.div
      className='bg-black/80 border border-white/30 sm:h-40 p-10 rounded-xl m-10'
      initial='offscreen'
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
      variants={variantNav}
    >
      <div className='flex items-center justify-between lg:px-10'>
        <div className='mr-4'>
          <img
            className='rotate-12 pb-4'
            src={gift1}
            alt='gift-1'
            width={90}
            height={20}
          />
        </div>
        <div>
          <p className='text-white lg:text-4xl capitalize pb-4'>
            Many more exciting gifts & swags
          </p>
        </div>
        <div>
          <img
            className='rotate-12 pb-4'
            src={gift2}
            alt='gift-2'
            width={90}
            height={20}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PrizeBanner;
