import React from "react";
import mentors from "../utils/mentors";
import CenterComponent from "./CenterComponent";
import { motion } from "framer-motion";
import { variantNav } from "../utils/variants";

const Mentors = () => {
  const mentor = mentors.map((item) => {
    return (
      <motion.div
        initial='offscreen'
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        variants={variantNav}
        className='w-fit sm:w-[22%] m-5 min-h-80 flex flex-col rounded-xl border border-black/[0.2] dark:border-white/[0.2] '
        key={item.id}
      >
        <div className='team-img' style={{ height: "100%" }}>
          <img className='rounded-xl' src={item.image.human} />
        </div>
        <div className='text-center mt-10'>
          <p className='text-2xl text-color-1 font-bold'>{item.name}</p>
          <p className='p-2 text-white text-xl'>{item.position}</p>
        </div>
      </motion.div>
    );
  });

  return (
    <CenterComponent>
      <div className=' flex flex-col justify-around '>
        <div className='my-10'>
          <p className='text-color-1 text-4xl text-center uppercase font-semibold'>
            Mentors
          </p>
        </div>

        <div className='flex flex-col lg:flex-row flex-wrap justify-around items-center'>
          {mentor}
        </div>
      </div>
    </CenterComponent>
  );
};

export default Mentors;
