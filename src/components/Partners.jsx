import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import CenterComponent from './CenterComponent';

import khalti from "/src/assets/khalti.jpg";
import './styles/partners.css';

import axios from 'axios';

const Partners = () => {
    const [partnersData, setPartnersData] = useState();

    const getPartnersData = async (url) => {
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data.partners)
        return data.partners;
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPartnersData('/api/partners.json');
            setPartnersData(result);
        };

        fetchData();
    }, []);
    
    const cells = partnersData?.map((item, idx) => 
    <Cell 
        key={item?.id}
        src={khalti}
        alt_text={item?.name}
    />);
  return (
    <CenterComponent>
        <section id="partners">
            <div className="faq-header text-center my-2">
            <h1 className='text-color-1/100 uppercase text-5xl font-normal'>Partners</h1>
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