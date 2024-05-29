import React, { useRef } from "react";
import { variantNav } from "../utils/variants";
import { motion } from "framer-motion";

const Cards = ({ position, prize, other, img, bg }) => {
  //   const ROTATION_RANGE = 40;

  //   const HALF_ROTATION_RANGE = 40 / 2;

  //   const ref = useRef(null);

  //   const x = useMotionValue(0);

  //   const y = useMotionValue(0);

  //   const xSpring = useSpring(x);

  //   const ySpring = useSpring(y);

  //   const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  //   const handleMouseMove = (e) => {
  //     if (!ref.current) return [0, 0];

  //     const rect = ref.current.getBoundingClientRect();

  //     const width = rect.width;

  //     const height = rect.height;

  //     const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;

  //     const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

  //     const rX = mouseY / height - HALF_ROTATION_RANGE;

  //     const rY = mouseX / width - HALF_ROTATION_RANGE;

  //     x.set(rX);

  //     y.set(rY);
  //   };

  //   const handleMouseLeave = () => {
  //     x.set(0);

  //     y.set(0);
  //   };

  return (
    <motion.div
      // ref={ref}
      // style={{ transformStyle: "preserve-3d", transform }}
      className={`p-5 sm:h-72 lg:h-60 rounded-xl ${bg} w-[70%] lg:w-[35%] box-card`}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      initial='offscreen'
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
      // variants={{
      //   initial: { scale: 0, opacity: 0 },
      //   animate: {
      //     scale: 1,
      //     opacity: 1,
      //     transition: { type: "spring", delay: 0.2 },
      //   },
      // }}
      variants={variantNav}
    >
      <div className='flex flex-col items-start px-5 h-[100%]'>
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
      </div>
    </motion.div>
  );
};
export default Cards;
