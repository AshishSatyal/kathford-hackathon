import React from "react";
import Teams from "../utils/team";
import CenterComponent from "./CenterComponent";
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
        className='w-fit sm:w-[22%] m-5 min-h-80 flex flex-col rounded-xl border border-black/[0.2] dark:border-white/[0.2]'
        key={item.id}
      >
        <div className='team-img' style={{ height: "100%" }}>
          <img className='rounded-xl' src={item.image.human} />
        </div>
        <div className='text-center mt-10'>
          <p className='text-2xl text-color-1'>{item.name}</p>
          <p className='p-2 text-white text-xl'>{item.position}</p>
        </div>
      </motion.div>
    );
    // return (
    //   <div className='border relative w-[22%] '>
    //     <div className='team-img' style={{ height: "100%", background: "red" }}>
    //       <img src={item.image.human} width={"100%"} height='200px' />
    //     </div>
    //     <div className='p-2 text-white text-center absolute bottom-0 left-0'>
    //       <p className='text-2xl'>{item.name}</p>
    //       <p>{item.position}</p>
    //     </div>
    //   </div>
    // );
  });

  return (
    <CenterComponent>
      <div className='min-h[85vh][x] flex flex-col justify-around'>
        <div className='my-5 text-center'>
          <p className='title text-3xl lg:text-5xl capitalize font-semibold p-10'>Our Team</p>
        </div>

        <div className='flex flex-col lg:flex-row flex-wrap justify-around items-center'>
          {team}
        </div>
      </div>
    </CenterComponent>
  );
};

export default Ourteam;
