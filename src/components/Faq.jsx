import React, { useState, useEffect } from 'react'
import Accordion from './Accordion'
import './styles/faq.css';

import { FaRegCalendarAlt, FaRegCalendarCheck, FaRegFileAlt, FaRegFile } from "react-icons/fa";

import data from '../utils/faq';
import { variantNav } from '../utils/variants';

import { motion } from 'framer-motion';
import CenterComponent from './CenterComponent';

const Faq = () => {
  const [currentData, setCurrentData] = useState();
  const [expanded, setExpanded] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const navs = [{
    'id': 0,
    'icon': <FaRegCalendarAlt size={20}/>,
    'name': 'About the event',
  }, {
    'id': 1,
    'icon': <FaRegCalendarCheck size={20}/>,
    'name': 'event logistics',
  }, {
    'id': 2,
    'icon': <FaRegFileAlt size={20}/>,
    'name': 'participation guidelines',
  }, {
    'id': 3,
    'icon': <FaRegFile size={20}/>,
    'name': 'other',
  }];

  useEffect(() => {
    setCurrentData(() => data.filter(item => item.categoryId === activeFaq));
  }, [activeFaq]);

  const faqNavItems = navs.map(item => {
    return (
      <motion.div 
        key={item.id}
        className={`body-nav-item faq-nav-item ${activeFaq === item.id ? 'active': ''}`}
        initial="offscreen"
        whileInView="onscreen"
        variants={variantNav}
        onClick={() => setActiveFaq(item.id)}
        viewport={{ 
          once: true 
        }}
      >
        <span className='faq-item-icon'>{ item.icon }</span>
        <p>{ item.name }</p>
      </motion.div>
    )
  })

  const accordions = currentData?.map((item, idx) => 
    <Accordion 
      key={idx}
      idx={idx}
      item={item}
      expanded={expanded}
      setExpanded={setExpanded}
    />
  );
 
  return (
    <CenterComponent>
      <section id='faq' className='py-4 px-4 '>
        <div className="faq-header text-center my-2">
          <h1 className='title text-3xl lg:text-5xl capitalize font-semibold p-10'>FAQ</h1>
          {/* <p className='text-white capitalize my-2 text-sm'>Discover helpful information and explanations to commonly asked questions.</p> */}
        </div>
        <div className="faq-main">
          <div className="body-nav faq-nav">
            {faqNavItems}
          </div>
          <div className="accordion-container">
            {accordions}
          </div>
        </div>
      </section>
    </CenterComponent>
  )
}

export default Faq