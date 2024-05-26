import React from "react";
import Dayplan from "./Dayplan";

const Schedule = () => {
  return (
    <div className='bg-color-2 min-h-[90vh] py-5 lg:px-10'>
      <div className='text-center text-xl my-5 '>
        <p className='text-white text-3xl lg:text-5xl capitalize font-semibold font-[robotomono] p-10'>
          Schedule
        </p>
        <p className='text-slate-300 font-mono'>
          Events starts from june27 to june28
        </p>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-around px-10 sm:my-5 lg:my-10'>
        <Dayplan day={`day-1 (june 27th)`} />
        <Dayplan day={`day-2 (june 28th)`} />
      </div>
    </div>
  );
};

export default Schedule;
