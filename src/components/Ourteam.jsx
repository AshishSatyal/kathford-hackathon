import React from "react";
import Teams from "../utils/team";
import CenterComponent from "./CenterComponent";

const Ourteam = () => {
  const team = Teams.map((item) => {
    // return (
    //   <div
    //     className='w-[22%] m-5 min-h-80 flex flex-col rounded-xl border'
    //     key={item.id}
    //   >
    //     <div className='team-img' style={{ height: "100%", background: "red" }}>
    //       <img src={item.image.human} />
    //     </div>
    //     <div className='p-2 text-white text-center'>
    //       <p className='text-2xl'>{item.name}</p>
    //       <p>{item.position}</p>
    //     </div>
    //   </div>
    // );
    return (
      <div className='border relative'>
        <div className='team-img' style={{ height: "100%", background: "red" }}>
          <img src={item.image.human} width={"200px"} height='200px' />
        </div>
        <div className='p-2 text-white text-center absolute bottom-0 left-0'>
          <p className='text-2xl'>{item.name}</p>
          <p>{item.position}</p>
        </div>
      </div>
    );
  });

  return (
    <CenterComponent>
      <div className='min-h[85vh] flex flex-col justify-around'>
        <div className='mt-5'>
          <p className='text-white text-4xl font-mono text-center'>Our Team</p>
        </div>

        <div className='flex lg:flex-row sm:flex-col flex-wrap justify-around items-center'>
          {team}
        </div>
      </div>
    </CenterComponent>
  );
};

export default Ourteam;
