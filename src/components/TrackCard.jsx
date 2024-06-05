import React from 'react';

import { variantNav } from '../utils/variants';

import { motion } from 'framer-motion';

const TrackCard = (props) => {
  const { icon, data } = props;
  return (
    <motion.div
      key={data?.id}
      initial="offscreen"
      whileInView="onscreen"
      variants={variantNav}
      className="track-details-container "
      viewport={{
        once: true,
      }}
    >
      <div className="track-details">
        <div className="track-icon">{icon}</div>
        <div className="track-info">
          <h4>{data?.title}</h4>
          <p className="flex items-center gap-2 pt-2 ">
            <span className="min-w-[5px] min-h-[5px] bg-white "></span>
            {data?.description}
          </p>
        </div>
      </div>
      {/* <div className="track-reward">
          <h4>winner gets</h4>
          <p>{ formatCurrency(data?.reward) }</p>
        </div> */}
    </motion.div>
  );
};

export default TrackCard;
