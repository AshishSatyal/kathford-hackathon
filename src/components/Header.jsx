import React, { useState } from "react";
import kathCode from "/src/assets/kathCode.png";
import hamBurger from "/src/assets/hamBurger.svg";
import Navlinks from "./Navlinks";
import useScrollPosition from "../hook/useScrollPosition";
import SideNav from "./SideNav";
import Button from "./Button";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const registration_url = 'https://docs.google.com/forms/d/e/1FAIpQLSduLeNfRW2__b8ClTTUslocDAJ65bkS_oGbyWQ7hdIBMr9e9A/viewform';
  const scrollValue = useScrollPosition();
  const body = document.body;

  const isHidden = scrollValue > 50;

  function toggleNav() {
    setToggle((prevToggle) => !prevToggle);
    document.body.classList.add("overflow-hidden");
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
          <Button label={ "register now" } link={registration_url} />
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
