import React, { useState, useEffect } from 'react'
import './styles/tracks.css';

import { BsGraphUpArrow } from "react-icons/bs";
import { LuPlaneTakeoff } from "react-icons/lu";
import { RiHeartPulseLine } from "react-icons/ri";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FaCubes } from "react-icons/fa6";
import { PiCity } from "react-icons/pi";
import { IoMdGlobe } from "react-icons/io";
import { GrCubes } from "react-icons/gr";

import data from '../utils/tracks'; // tracks data...
import { variantNav } from '../utils/variants';

import { motion } from 'framer-motion';

import CenterComponent from './CenterComponent';
import TrackCard from './TrackCard';



const trackIcons = [<LuPlaneTakeoff size={20} />, <RiHeartPulseLine size={20} />, <HiOutlineBookOpen size={20} />, <BsGraphUpArrow size={20} />, <FaCubes size={20} />, <PiCity size={20} />, <IoMdGlobe size={20} />];

const Tracks = () => {
  const [currentTrackData, setCurrentTrackData] = useState();
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    setCurrentTrackData(() => data.find(item => item.id === activeTrack));
  }, [activeTrack]);

  const trackNavItems = data?.map((item, idx) => {
    return (
      <motion.div
      key={item.id}    
      className={`body-nav-item track-nav-item ${item.id === activeTrack ? 'active' : ''}`}
      // initial="offscreen"
      // whileInView="onscreen"
      // variants={variantNav}
      onClick={() => setActiveTrack(item.id)}
      // viewport={{
      //   once: true,
      // }}
      >
        <div className='track-icon relative '>
          { trackIcons[idx] }
          <span className="tooltip-text top-0">{ item?.title }</span>
        </div>
        <span>{item.title}</span>
      </motion.div>
    )
  });

  return (
    <CenterComponent>
        <section className='py-4 px-4 '>
        <div className="faq-header text-center my-2">
          <h1 className='title text-3xl lg:text-5xl capitalize font-semibold p-10'>Tracks</h1>
        </div>
        <div className="tracks-main">
          <div className="body-nav track-nav">
            {trackNavItems}
          </div>
          <TrackCard 
            icon={trackIcons[currentTrackData?.id]}
            data={currentTrackData}
          />
        </div>
      </section>
    </CenterComponent>
  )
}

export default Tracks