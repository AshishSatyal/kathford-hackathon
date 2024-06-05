import React, { useState } from "react";
import kathCodeLogo from "/src/assets/kathCode.png";
import kathCodeLogoSmall from "/src/assets/kathcode_logo_small.png";
import hamBurger from "/src/assets/hamBurger.svg";
import SideNav from "./SideNav";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = ({ isHidden }) => {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle((prevToggle) => !prevToggle);
    document.body.classList.add("overflow-hidden");
  }
  return (
    // --Header-container--
    <>
      <div className='sticky top-0 px-[2.5rem] py-4 h-20 min-w-full text-white z-10 '>
        <div className='flex justify-between items-center xl:px-10'>
          <div>
            <Link to='/' className='block w-[12rem] xl:mr-8 '>
              <img
                className={` w-[100px] h-[40px] sm:w-[auto] sm:h-[auto] hidden lg:block transition-all duration-300 ease-in-out ${isHidden ? 'lg:opacity-0 lg:hidden' : ''}`}
                src={kathCodeLogo}
                alt='logo'
              />
              <img
                className={`w-[auto] h-[40px] ${!isHidden ? 'lg:hidden' : ''}`}
                src={kathCodeLogoSmall}
                alt='logo'
              />
            </Link>
          </div>
          {/* <Navlinks scrollState={isHidden} /> */}

          <div className='top-[5rem] bottom-0 left-0 right-0 lg:static lg:flex items-center transition-all duration-75 ease-out lg:h-4'>
            {/* {!isHidden && ( */}
            <Button
              className={`hidden lg:inline-flex ${!isHidden ? '' : 'lg:opacity-0 invisible'}`}
              label={"register now"}
              link={"https://forms.gle/NpdpPh6oXmSSmRVf8"}
            />
            {/* )} */}
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
