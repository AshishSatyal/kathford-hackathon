import React from "react";
import kathCode from "/src/assets/kathCode.png";
import hamBurger from "/src/assets/hamBurger.svg";
import Navlinks from "./Navlinks";

const Header = () => {
  return (
    // --Header-container--
    <div className='sticky top-0 px-[2.5rem] py-4 bg-color-5 min-w-full text-white z-10'>
      <div className='flex items-center xl:px-10'>
        <div>
          <a href='#hero' className='block w-[12rem] xl:mr-8 '>
            <img
              className=' w-[100px] h-[40px] sm:w-[auto] sm:h-[auto]'
              src={kathCode}
              alt='logo'
              width={200}
              height={40}
            />
          </a>
        </div>
        <Navlinks />
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
