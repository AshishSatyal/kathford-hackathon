import React, { useState, useEffect } from "react";
// import Cell from "./Cell";
import CenterComponent from "./CenterComponent";
import partners from "../utils/partners";
import { motion } from "framer-motion";
import { variantNav } from "../utils/variants";

// import khalti from "/src/assets/khalti.jpg";
// import "./styles/partners.css";

// import axios from "axios";

const Partners = () => {
  const cell = partners.map((item) => {
    return (
      <motion.div
        initial='offscreen'
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        variants={variantNav}
        className='flex flex-col items-center text-white my-5'
      >
        <h1 className='font-[monument] sm:text-3xl lg:text-5xl my-5'>
          {item.type}
        </h1>
        <img src={item.img.khalti} width={200} height={100} alt='' />
        <p className='my-5 font-semibold text-3xl'>{item.company}</p>
      </motion.div>
    );
  });

  return (
    <CenterComponent>
      <section id='partners'>
        <div className='faq-header text-center my-5'>
          <h1 className='text-color-1/100 uppercase text-5xl font-semi-bold'>
            Partners
          </h1>
        </div>
        <ul className='honeycomb'>
          {cell}
          <li className='honeycomb-cell honeycomb_hidden'></li>
        </ul>{" "}
        {cell}
      </section>
    </CenterComponent>
  );
};

export default Partners;
