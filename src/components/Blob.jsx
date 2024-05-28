import React, { useEffect, useState } from 'react';

const Blob = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [deviceType, setDeviceType] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const isTouchDevice = () => {
    try {
      document.createEvent('TouchEvent');
      setDeviceType('touch');
      return true;
    } catch (e) {
      setDeviceType('mouse');
      return false;
    }
  };

  const move = (e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    const cursorBorder = document.getElementById('cursor-border');
    if (cursorBorder) {
      cursorBorder.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        {
          duration: 3000,
          fill: 'forwards',
        }
      );
    }
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <style>
        {`
          #cursor-border {
            background-color:white;
            height:12rem;
            width:12rem;
            aspect-ratio:1;
            position:fixed;
            left:50%;
            top:50%;
            translate: -50% -50%;
            border-radius:50%;
            background:linear-gradient(to right, aquamarine, mediumpurple);
           filter: blur(100px);
      
          }

        
          
        `}
      </style>
      <div id="cursor-border"></div>
    </>
  );
};

export default Blob;
