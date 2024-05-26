import React, { useState, useEffect } from 'react'
import './styles/tracks.css';

import { BsDatabase } from "react-icons/bs";

import data from '../utils/tracks'; // tracks data...
import { variantNav } from '../utils/variants';

import { motion } from 'framer-motion';

import CenterComponent from './CenterComponent';
import TrackCard from './TrackCard';


const trackIcons = [<BsDatabase size={20} />, <BsDatabase size={20} />, <BsDatabase size={20} />, <BsDatabase size={20} />, <BsDatabase size={20} />, <BsDatabase size={20} />, <BsDatabase size={20} />];

const Tracks = () => {
  const [currentTrackData, setCurrentTrackData] = useState();
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    setCurrentTrackData(() => data.find(item => item.id === activeTrack));
    console.log("current data ====> ", currentTrackData);
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
        <div className='track-icon'>{ trackIcons[idx] }</div>
        <span>{item.title}</span>
      </motion.div>
    )
  });

  return (
    <CenterComponent>
        <section className='py-4 px-4 '>
        <div className="faq-header text-center my-2">
          <h1 className='text-color-1/100 font-[robotomono] uppercase text-5xl font-normal'>Tracks</h1>
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