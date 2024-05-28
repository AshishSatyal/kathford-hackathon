import React from "react";
import { motion } from "framer-motion";
import { variantNav } from "../utils/variants";

const Dayplan = ({ day }) => {
  return (
    <motion.div
      className='bg-color-1/70 lg:w-[40%] sm:w-[70%] rounded-xl p-5'
      initial='offscreen'
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
      variants={variantNav}
    >
      <p className='text-white text-center capitalize text-3xl font-[robotomono] py-4 border-b[x]'>
        {day}
      </p>
      <div className='flex flex-col items-start justify-evenly mt-5[x] p-2 text-white'>
        <p className=' sm:text-md lg:text-xl font-mono capitalize p-2'>
          <span className='text-slate-200'>07:00 AM</span>: Check in and
          registration
        </p>
        <p className=' sm:text-md lg:text-xl font-mono capitalize p-2'>
          <span className='text-slate-200'>08:00 AM</span>: Inaguration
        </p>
        <p className=' sm:text-md lg:text-xl font-mono capitalize p-2'>
          <span className='text-slate-200'>09:00 AM</span>: Lunch
        </p>
        <p className=' sm:text-md lg:text-xl font-mono capitalize p-2'>
          <span className='text-slate-200'>10:00 AM</span>: Hackathon starts!
        </p>
        <p className=' sm:text-md lg:text-xl font-mono capitalize p-2'>
          <span className='text-slate-200'>02:30 PM</span>: snacks break
        </p>
        <p className=' sm:text-md lg:text-xl font-mono capitalize p-2'>
          <span className='text-slate-200'>07:30 PM</span>: Dinner break
        </p>
      </div>
    </motion.div>
  );
};

export default Dayplan;
