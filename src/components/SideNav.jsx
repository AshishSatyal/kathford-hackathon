import React from "react";
import Cross from "../assets/cross.svg";

const SideNav = ({ setToggle, toggleNav }) => {
  const closeSideBarModal = () => {
    setToggle(false);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className='fixed md:m-10 top-0 text-white right-0 w-full md:w-[44%] h-full md:h-[85%] bg-black md:rounded-xl z-30 opacity-100'>
      <div className='flex flex-col h-[100%] '>
        <div className='flex h-[60%] '>
          <ul className='flex w-4/5 flex-col justify-center uppercase gap-5 items-center[x] text-white text-start pl-12 lg:pl-16 font-[monument] text-2xl md:text-3xl lg:text-4xl '>
            <li className='nav-list'>
              <a className='font-semibold' href='#prizes' onClick={closeSideBarModal}>
                Prizes
              </a>
            </li>
            <li className='nav-list'>
              <a className=' font-semibold ' href='#schedule' onClick={closeSideBarModal}>
                Schedule
              </a>
            </li>
            <li className='nav-list'>
              <a className='font-semibold' href='#partners' onClick={closeSideBarModal}>
                Partner
              </a>
            </li>
            <li className='nav-list'>
              <a className='font-semibold' href='#faq' onClick={closeSideBarModal}>
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

        <div className='flex p-10 pl-12 justify-around items-center'>
          <div className='w-1/5'>
            <p className='text-sm'>Connect</p>
          </div>
          <div className='w-4/5 flex flex-col  text-sm'>
            <a className='pb-4' target="_blank" href='https://www.instagram.com/kathforditclub/'>
              Instagram
            </a>
            <a href='https://www.facebook.com/profile.php?id=61554820927866' target='_blank'>Facebook</a>
          </div>
        </div>
        <div className='flex p-10 pl-12'>
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
    </div>
  );
};

export default SideNav;
