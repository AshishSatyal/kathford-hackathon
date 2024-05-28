import React from 'react'
import Cell from './Cell'
import CenterComponent from './CenterComponent';

import './styles/partners.css';

const partners = new Array(13).fill(0);

const Partners = () => {
    const cells = partners.map((item, idx) => 
    <Cell 
        key={idx}
        src={'https://blog.khalti.com/wp-content/uploads/2021/01/khalti-icon.png'}
        alt_text={'Khalti logo'}
    />);
  return (
    <CenterComponent>
        <section id="partners">
            <div className="faq-header text-center my-2">
            <h1 className='text-color-1/100 font-[robotomono] uppercase text-5xl font-normal'>Partners</h1>
            </div>
            <ul className="honeycomb">
                { cells }
                <li className="honeycomb-cell honeycomb_hidden"></li>
            </ul>
        </section>
    </CenterComponent>
  )
}

export default Partners