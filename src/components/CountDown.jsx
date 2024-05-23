import { useState, useEffect } from "react";

const CountDown = () => {
  const [timerDays, serTimerDays] = useState("00");
  const [timerHours, serTimerHours] = useState("00");
  const [timerMinutes, serTimerMinutes] = useState("00");
  const [timerSecods, serTimerSeconds] = useState("00");

  const countDownDate = new Date("june 21 2024 00:00:00").getTime();

  const startTimer = () => {
    const time = countDownDate - Date.now();
    serTimerDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    serTimerHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    serTimerMinutes(Math.floor((time / 1000 / 60) % 60));
    serTimerSeconds(Math.floor((time / 1000) % 60));
  };
  useEffect(() => {
    const interval = setInterval(() => startTimer(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex text-center items-center max-h-40'>
      <div>
        <p className='text-md text-slate-400 font-mono font-semibold'>
          Event starts in:
        </p>
      </div>
      <div className='ml-5'>
        <p className='text-2xl font-bold text-white font-mono pb-1'>{`${timerDays}:${timerHours}:${timerMinutes}:${timerSecods}`}</p>
      </div>
    </div>
  );
};

export default CountDown;
