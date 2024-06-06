import React from "react";
import Cross from "../assets/cross.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variantNav } from "../utils/variants";

const SideNav = ({ setToggle, toggleNav }) => {
  const closeSideBarModal = () => {
    setToggle(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <motion.div
      initial='offscreen'
      whileInView={"onscreen"}
      viewport={{
        once: true,
      }}
      variants={variantNav}
      className='fixed md:m-10 top-0 text-white right-0 w-full md:w-[44%] h-full md:h-[85%] bg-black md:rounded-xl z-30 opacity-100 overflow-y-auto'
    >
      <div className='flex flex-col h-[100%] pl-12 lg:pl-16 '>
        <div className='flex h-[60%] '>
          <ul className='flex w-4/5 flex-col justify-center uppercase gap-5 items-center[x] text-white text-start font-[monument] text-2xl md:text-3xl lg:text-4xl mt-16'>
            <li className='nav-list'>
              <a
                className='font-semibold'
                href='#prizes'
                onClick={closeSideBarModal}
              >
                Prizes
              </a>
            </li>
            <li className='nav-list'>
              <a
                className=' font-semibold '
                href='#schedule'
                onClick={closeSideBarModal}
              >
                Schedule
              </a>
            </li>
            <li className='nav-list'>
              <a
                className='font-semibold'
                href='#partners'
                onClick={closeSideBarModal}
              >
                Partner
              </a>
            </li>
            <li className='nav-list'>
              <Link
                className='font-semibold text-white'
                to='/our-team'
                onClick={closeSideBarModal}
              >
                Our Team
              </Link>
            </li>
            {/* <li className='nav-list'>
              <Link className='font-semibold text-white' to='/our-team'>
                Our Team
              </Link>
            </li> */}
            <li className='nav-list'>
              <a
                className='font-semibold'
                href='#faq'
                onClick={closeSideBarModal}
              >
                FAQs
              </a>
            </li>
          </ul>
          <div className='w-[44px] h-[44px] ml-auto mr-4 mt-4'>
            <button
              onClick={() => {
                setToggle((prevState) => !prevState);
                document.body.classList.remove("overflow-hidden");
              }}
            >
              <img className='cross' src={Cross} width={100} />
            </button>
          </div>
        </div>

        <div className='flex py-10 justify-around items-center gap-4 mt-8'>
          <div className='w-1/5'>
            <p className='text-sm'>Connect</p>
          </div>
          <div className='w-4/5 flex flex-col  text-sm'>
            <a
              className='pb-4'
              target='_blank'
              href='https://www.instagram.com/kathforditclub/'
            >
              Instagram
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=61554820927866'
              target='_blank'
            >
              Facebook
            </a>
          </div>
        </div>
        <div className='flex py-10 gap-4'>
          <div className='w-1/5'>
            <p className='text-sm '>Register On</p>
          </div>
          <div className='w-4/5 flex flex-col'>
            <a target='_blank' href='https://forms.gle/NpdpPh6oXmSSmRVf8'>
              Google Form
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideNav;
