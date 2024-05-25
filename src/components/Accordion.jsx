import React from 'react'
import './styles/accordion.css';

import { IoClose } from "react-icons/io5";

import { motion } from 'framer-motion';

// variant for accordion header...
const variants = {
  offscreen: {
    y: 44,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "spring",
    }
  }
};

const Accordion = (props) => {
  const { idx, item, expanded, setExpanded } = props;

  const isOpen = (idx === expanded);

  const expandAccordion = () => {
    setExpanded(isOpen ? false : idx);
  }

  return (
    <motion.div
      className='accordion'
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ 
        once: true, 
        amount: 0.8 
      }}
    >
      <motion.button
       className={`accordion-header ${isOpen ? "active": ""}
      `}
        onClick={expandAccordion}
      >
        <span>
          {item.question}
        </span>
        <span className={`${!isOpen ? "accordion-close" : ""}`}>
          <IoClose />
        </span>
      </motion.button>
      {isOpen && <div className="accordion-body">
        {item.answer}
      </div>}
    </motion.div>
  )
}

export default Accordion