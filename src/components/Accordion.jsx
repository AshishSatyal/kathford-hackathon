import React from 'react'
import './styles/accordion.css';

import { IoClose } from "react-icons/io5";

const Accordion = (props) => {
  const { idx, expanded, setExpanded } = props;

  const isOpen = (idx === expanded);

  const expandAccordion = () => {
    setExpanded(isOpen ? false : idx);
  }

  return (
    <div className='accordion'>
      <button className={`accordion-header ${isOpen ? "active": ""}
      `}
      onClick={expandAccordion}
      >
        <span>
          How long is the KathCode event?
        </span>
        <span className={`${!isOpen ? "accordion-close" : ""}`}>
          <IoClose />
        </span>
      </button>
      {isOpen && <div className="accordion-body">
        It is a 48 hour event to be held on the Kathford premises.
      </div>}
    </div>
  )
}

export default Accordion