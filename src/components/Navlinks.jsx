import React from "react";

const Navlinks = () => {
  return (
    <nav className='hidden top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex lg:mx-auto'>
      <div className='relative flex flex-col items-center justify-center m-auto lg:flex-row'>
        <ul className='flex-1 flex justify-center items-center gap-16'>
          <li>
            <a
              className='font-mono font-semibold leading-normal text-lg text-white '
              href='#prizes'
            >
              Prizes
            </a>
          </li>
          <li>
            <a
              className='font-mono font-semibold leading-normal text-lg text-white '
              href='#schedule'
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              className='font-mono font-semibold leading-normal text-lg text-white'
              href='#partner'
            >
              Partner
            </a>
          </li>
          <li>
            <a
              className='font-mono font-semibold leading-normal text-lg text-white '
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
