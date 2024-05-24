import React, { useState } from 'react'
import Accordion from './Accordion'
import './styles/faq.css';

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const accordionIds = new Array(5).fill(0);  // [0, 0, 0, 0, 0]

  const accordions = accordionIds.map((_, idx) => 
    <Accordion 
      key={idx}
      idx={idx}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  );

  return (
    <section className='py-2 px-4 '>
      <div className="faq-header text-center my-2">
        <h1 className='text-color-1/100 font-[robotomono] uppercase text-5xl font-normal'>FAQ</h1>
        <p className='text-white capitalize my-2 text-sm'>Discover helpful information and explanations to commonly asked questions.</p>
      </div>
      <div className="accordion-container">
        {accordions}
      </div>
    </section>
  )
}

export default Faq