import React from "react";
import Dayplan from "./Dayplan";
import CenterComponent from "./CenterComponent";

const Schedule = () => {
  return (
    <CenterComponent>
      <div
        id='schedule'
        className='bg-color-5 min-h-[90vh][x] py-5 lg:px-10[x] pb-28'
      >
        <div className='text-center text-xl my-5 '>
          <p className='text-white text-3xl lg:text-5xl capitalize font-semibold font-[robotomono] p-10'>
            Schedule
          </p>
          <p className='text-slate-300 font-mono mb-10'>
            Events starts from june27 to june28
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-around gap-y-10'>
          <Dayplan day={`day-1 (june 27th)`} />
          <Dayplan day={`day-2 (june 28th)`} />
        </div>
      </div>
    </CenterComponent>
  );
};

export default Schedule;
