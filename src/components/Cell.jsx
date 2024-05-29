import React from 'react'

const Cell = ({ src, alt_text }) => {
  return (
    <li className="honeycomb-cell">
      <a 
        href="https://khalti.com/" 
        target='_blank'
        className='block w-full h-[200%] mt-[-50px]'>

        {/* if silver the box-shadow will be silver */}
          <span className="tooltip-text">{"Khalti"}</span>
          <img src={src} alt={alt_text} className="honeycomb-cell_img " width={100} height={100}/>
      </a>
        {/* <div className="honeycomb-cell_title">Khalti</div> */}
    </li>
  )
}

export default Cell