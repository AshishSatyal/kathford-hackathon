import React from "react";

const Cards = ({ position, prize, other, img, bg }) => {
  return (
    <div className={`p-5 sm:h-72 lg:h-52 rounded-xl ${bg} w-[50%] lg:w-[30%]`}>
      <div className='flex flex-col items-start px-5'>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-4xl font-mono text-slate-200 capitalize'>
            {position}
          </p>
          <img src={img} alt='winner' width={50} height={20} />
        </div>

        <p className='text-white pt-5 font-mono text-2xl'>{prize}</p>
        <p className='text-white pt-5 font-mono text-2xl'>{other}</p>
      </div>
    </div>
  );
};

export default Cards;
