import React from 'react'

const Cell = ({ src, alt_text }) => {
  return (
    // <a href="#">
    <li className="honeycomb-cell">
        <img src={src} alt={alt_text} className="honeycomb-cell_img " width={100} height={100}/>
        <div className="honeycomb-cell_title">Khalti</div>
    </li>
    // </a>
  )
}

export default Cell