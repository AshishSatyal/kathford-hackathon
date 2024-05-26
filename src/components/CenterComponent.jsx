import React from 'react'

const CenterComponent = ({ children }) => {
  return (
    <div className='mx-auto max-w-[1200px]'>
        { children }
    </div>
  )
}

export default CenterComponent