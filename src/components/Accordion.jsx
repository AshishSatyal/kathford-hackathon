import React from 'react'
import './styles/accordion.css';

import { IoClose } from "react-icons/io5";

import { motion } from 'framer-motion';

// variant for accordion header...
const variantHeader = {
  offscreen: {
    y: 44,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
    }
  }
};

const Accordion = (props) => {
  const { idx, expanded, setExpanded } = props;

  const isOpen = (idx === expanded);

  const expandAccordion = () => {
    setExpanded(isOpen ? false : idx);
  }

  return (
    <motion.div
      className='accordion'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.button
       className={`accordion-header ${isOpen ? "active": ""}
      `}
        onClick={expandAccordion}
        variants={variantHeader}
      >
        <span>
          How long is the KathCode event?
        </span>
        <span className={`${!isOpen ? "accordion-close" : ""}`}>
          <IoClose />
        </span>
      </motion.button>
      {isOpen && <div className="accordion-body">
        It is a 48 hour event to be held on the Kathford premises.
      </div>}
    </motion.div>
  )
}

export default Accordion