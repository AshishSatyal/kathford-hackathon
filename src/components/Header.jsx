import React, { useState } from "react";
import kathCode from "/src/assets/kathCode.png";
import hamBurger from "/src/assets/hamBurger.svg";
import Navlinks from "./Navlinks";
import useScrollPosition from "../hook/useScrollPosition";
import SideNav from "./SideNav";
import Button from "./Button";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const scrollValue = useScrollPosition();
  const body = document.body;

  const isHidden = scrollValue > 50;

  function toggleNav() {
    setToggle((prevToggle) => !prevToggle);
    document.body.classList.add("overflow-hidden");
  }
  return (
    // --Header-container--
    <>
      <div className='sticky top-0 px-[2.5rem] py-4 min-w-full text-white z-10 '>
        <div className='flex justify-between items-center xl:px-10'>
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
          {/* <Navlinks scrollState={isHidden} /> */}

          <div className='top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex items-center transition-all duration-75 ease-out'>
            {!isHidden && <Button label={"register now"} />}
            <div className={`block ml-5`}>
              <button onClick={toggleNav}>
                <img src={hamBurger} alt='HamBurger' width={25} height={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`overlay ${toggle ? "active" : ""} `}>
        {toggle ? <SideNav setToggle={setToggle} /> : ""}
      </div>
    </>
  );
};

export default Header;
