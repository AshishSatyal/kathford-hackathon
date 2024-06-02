import React from "react";
import Cross from "../assets/cross.svg";

const SideNav = ({ setToggle }) => {
  return (
    <div className='fixed m-10 top-0 text-white right-0 w-[40%] h-[85%] bg-black rounded-xl z-30 opacity-100'>
      <div className='flex flex-col h-[100%] '>
        <div className='flex h-[60%] '>
          <ul className='flex w-4/5 flex-col justify-center uppercase gap-5 items-center[x] text-white text-start pl-24 font-[monument] text-4xl '>
            <li className='nav-list'>
              <a className='font-semibold' href='#prizes'>
                Prizes
              </a>
            </li>
            <li className='nav-list'>
              <a className=' font-semibold ' href='#schedule'>
                Schedule
              </a>
            </li>
            <li className='nav-list'>
              <a className='font-semibold' href='#partner'>
                Partner
              </a>
            </li>
            <li className='nav-list'>
              <a className='font-semibold' href='#faq'>
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

        <div className='flex p-10  justify-around items-center'>
          <div className='w-1/5'>
            <p className='text-sm'>Connect</p>
          </div>
          <div className='w-4/5 flex flex-col  text-sm'>
            <a className='pb-4' href=''>
              Instagram
            </a>
            <a href=''>Facebook</a>
          </div>
        </div>
        <div className='flex p-10  '>
          <div className='w-1/5'>
            <p className='text-sm font-[archive]'>Register On</p>
          </div>
          <div className='w-4/5 flex flex-col'>
            <a href='https://forms.gle/NpdpPh6oXmSSmRVf8' target='_blank'>
              Google Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
