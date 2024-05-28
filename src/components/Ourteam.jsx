import React from "react";
import Teams from "../utils/team";
import CenterComponent from "./CenterComponent";
import { motion } from "framer-motion";
// import variantNav from "../utils/variants";

const Ourteam = () => {
  const team = Teams.map((item) => {
    return (
      <motion.div
        initial='offscreen'
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className='w-[22%] m-5 min-h-80 flex flex-col rounded-xl border'
        key={item.id}
      >
        <div className='team-img' style={{ height: "100%" }}>
          <img className='rounded-xl' src={item.image.human} />
        </div>
        <div className='text-center mt-10'>
          <p className='text-2xl text-color-1 font-mono'>{item.name}</p>
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
      <div className='min-h[85vh] flex flex-col justify-around'>
        <div className='my-5'>
          <p className='text-white text-4xl font-mono text-center'>Our Team</p>
        </div>

        <div className='flex lg:flex-row sm:flex-col flex-wrap justify-around items-center'>
          {team}
        </div>
      </div>
    </CenterComponent>
  );
};

export default Ourteam;
