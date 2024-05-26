import React from 'react'
import { formatCurrency } from '../utils/formatCurrency';

const TrackCard = (props) => {
    const {icon, data} = props;
  return (
    <div className="track-details-container">
        <div className="track-details">
            <div className='track-icon'>
                { icon }
            </div>
            <div className="track-info">
            <h4>{ data?.title }</h4>
            <p>{ data?.description }</p>
            </div>
        </div>
        <div className="track-reward">
          <h4>winner gets</h4>
          <p>{ formatCurrency(data?.reward) }</p>
        </div>
    </div>
  )
}

export default TrackCard