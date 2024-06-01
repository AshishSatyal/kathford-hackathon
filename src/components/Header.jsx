import React, { useState } from "react";
import kathCode from "/src/assets/kathCode.png";
import hamBurger from "/src/assets/hamBurger.svg";
import Navlinks from "./Navlinks";
import Button from "./Button";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle((prevToggle) => !toggle);
    console.log(toggle ? "unclick" : "click");
  }
  return (
    // --Header-container--
    <div className='sticky top-0 px-[2.5rem] py-4 min-w-full text-white z-10 '>
      <div className='flex items-center xl:px-10'>
        <div>
          <a href="#" className="block w-[12rem] xl:mr-8 ">
            <img
              className=" w-auto h-[40px] sm:w-[auto] sm:h-[auto]"
              src={kathCode}
              alt="logo"
            />
          </a>
        </div>
        <Navlinks toggleState={toggle} />


        <div className='hidden top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex'>
          <Button label={ "register now" } />
        </div>
        <div className='lg:hidden ml-auto'>
          <button onClick={toggleNav}>
            <img src={hamBurger} alt='HamBurger' width={25} height={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
