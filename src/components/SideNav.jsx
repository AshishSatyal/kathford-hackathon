import React from "react";

const SideNav = () => {
  return (
    <div className='fixed m-10 top-0 text-white left-0 w-[40%] h-[85%] bg-black rounded-xl z-10 opacity-100'>
      <div className='flex flex-col h-[100%]'>
        <div className='flex w-fill h-[70%]'>
          <ul className='flex w-4/5 flex-col justify-center uppercase gap-5 items-center[x] text-white  text-start border-r-2 pl-52'>
            <li>
              <a className='font-semibold text-4xl' href='#prizes'>
                Prizes
              </a>
            </li>
            <li>
              <a className=' font-semibold text-4xl ' href='#schedule'>
                Schedule
              </a>
            </li>
            <li>
              <a className='font-semibold text-4xl' href='#partner'>
                Partner
              </a>
            </li>
            <li>
              <a className='font-semibold text-4xl' href='#faq'>
                FAQs
              </a>
            </li>
          </ul>
          <div className='w-1/5'>cross</div>
        </div>

        <div>
          <p className='text-white'>Hello world</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
