import React from "react";
import gift1 from "../assets/gift1.svg";
import gift2 from "../assets/gift2.svg";
import { motion } from "framer-motion";

const PrizeBanner = () => {
  return (
    <motion.div
      className='bg-color-3/100 sm:h-40 p-10 rounded-xl m-10'
      initial='initial'
      whileInView={"animate"}
      viewport={{
        once: true,
      }}
      variants={{
        initial: { scale: 0, opacity: 0 },
        animate: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", delay: 0.2 },
        },
      }}
    >
      <div className='flex items-center justify-between lg:px-10'>
        <div className='mr-4'>
          <img
            className='rotate-12'
            src={gift1}
            alt='gift-1'
            width={90}
            height={20}
          />
        </div>
        <div>
          <p className='text-white lg:text-4xl  capitalize'>
            Many more exciting gifts & swags
          </p>
        </div>
        <div>
          <img
            className='rotate-12'
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
