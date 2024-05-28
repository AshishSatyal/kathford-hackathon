import React from "react";
import kathCode from "/src/assets/kathCode.png";
import hamBurger from "/src/assets/hamBurger.svg";

const Header = () => {
  return (
    // --Header-container--
    <div className='sticky top-0 px-[2.5rem] py-4 bg-color-5 min-w-full text-white z-10'>
      <div className='flex items-center xl:px-10'>
        <div>
          <a href='#hero' className='block w-[12rem] xl:mr-8 '>
            <img
              src={kathCode}
              alt='logo'
              width={200}
              height={40}
              // className='sm:w-[5rem] lg:w-[18rem]'
            />
          </a>
        </div>
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
                  href='#partners'
                >
                  Partners
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
        <div className='hidden top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex'>
          <button className='register m-2 p-4 rounded-lg bg-gradient-to-r from-color-1 to-color-3 capitalize  font-mono text-lg font-bold'>
            register now
          </button>
        </div>
        <div className='lg:hidden ml-auto'>
          <img src={hamBurger} alt='HamBurger' width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
