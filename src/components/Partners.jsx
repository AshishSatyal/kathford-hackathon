import React, { useState, useEffect } from "react";
// import Cell from "./Cell";
import CenterComponent from "./CenterComponent";
import partners from "../utils/partners";

// import khalti from "/src/assets/khalti.jpg";
// import "./styles/partners.css";

// import axios from "axios";

const Partners = () => {
  console.log(partners);
  const cell = partners.map((item) => {
    return (
      <div className='flex flex-col items-center text-white'>
        <h1 className='font-[monument] text-5xl'>{item.type}</h1>
        <img src={item.img} width={200} height={100} alt='' />
        <p>{item.company}</p>
      </div>
    );
  });

  return (
    <CenterComponent>
      <section id='partners'>
        <div className='faq-header text-center my-2'>
          <h1 className='text-color-1/100 uppercase text-5xl font-normal'>
            Partners
          </h1>
        </div>
        <ul className='honeycomb'>
          {cells}
          <li className='honeycomb-cell honeycomb_hidden'></li>
        </ul>
      </section>
    </CenterComponent>
  );
};

export default Partners;
