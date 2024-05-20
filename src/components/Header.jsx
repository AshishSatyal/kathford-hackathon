import React from "react";
import kathCode from "/src/assets/kathCode.png";

const Header = () => {
  return (
    <div className='fixed top-0'>
      <div className='flex items-center px-5 lg:px-7 xl:px-10 max-lg:py-4'>
        <a href='#hero' className='block w-[12rem] xl:mr-8 '>
          <img src={kathCode} alt='logo' width={200} height={40} />
        </a>
      </div>
    </div>
  );
};

export default Header;
