import React from "react";
import Teams from "../utils/team";
import CenterComponent from "../components/CenterComponent";
import { motion } from "framer-motion";
import { variantNav } from "../utils/variants";

const Ourteam = () => {
  const team = Teams.map((item) => {
    return (
      <motion.div
        initial='offscreen'
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        variants={variantNav}
        className=' sm:min-w-[300px]  w-[80%] sm:w-[22%] m-5 min-h-80 flex flex-col rounded-xl border border-black/[0.2] dark:border-white/[0.2] '
        key={item.id}
      >
        <div className=' w-[100%] h-72'>
          <img
            className='rounded-xl w-[100%] border h-full object-cover object-center'
            src={item.image}
          />
        </div>
        <div className='text-center mt-10 bg-black w-full rounded-xl'>
          <p className='text-2xl text-color-1'>{item.name}</p>
          <p className='p-2 text-white text-xl'>{item.position}</p>
        </div>
      </motion.div>
    );
  });

  return (
    <CenterComponent>
      <div className=' flex flex-col justify-around mt-10'>
        <div className='my-5'>
          <p className='text-white text-4xl text-center'>Our Team</p>
        </div>

        <div className='flex flex-col lg:flex-row flex-wrap justify-around items-center'>
          {team}
        </div>
      </div>
    </CenterComponent>
  );
};

export default Ourteam;
