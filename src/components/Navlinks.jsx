import React from "react";
import { Link } from "react-router-dom";

const Navlinks = ({ scrollState }) => {
  return (
    <nav
      className={`${scrollState ? "lg:hidden" : "lg:block"}
         top-[5rem] bottom-0 left-0 right-0 hidden lg:flex lg:mx-auto`}
    >
      <div className='relative flex flex-col items-center justify-center m-auto lg:flex-row'>
        <ul className='flex-1 flex justify-center items-center gap-16'>
          <li>
            <a
              className=' font-semibold leading-normal text-lg text-white '
              href='#prizes'
            >
              Prizes
            </a>
          </li>
          <li>
            <a
              className=' font-semibold leading-normal text-lg text-white '
              href='#schedule'
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              className='font-semibold leading-normal text-lg text-white'
              href='#partner'
            >
              Partner
            </a>
          </li>
          <li>
            <Link
              className='font-semibold leading-normal text-lg text-white'
              to='/our-team'
            >
              Our Team
            </Link>
          </li>
          <li>
            <a
              className='font-semibold leading-normal text-lg text-white '
              href='#faq'
            >
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navlinks;
