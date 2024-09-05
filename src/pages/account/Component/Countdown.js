
import React, { useState, useEffect } from 'react';

const Countdown = () => {

  const targetDate = new Date('2024-09-30T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
     
      <div>
        {timeLeft.days !== undefined ? (
          <div className='!flex justify-center gap-1 !font-extrabold text-xl'>
             <h1>Nepal Tour :  </h1>
            <p>{timeLeft.days} D - </p>
            <p>{timeLeft.hours} H - </p>
            <p>{timeLeft.minutes} M - </p>
            <p>{timeLeft.seconds} S  </p>
          </div>
        ) : (
         ""
        )}
      </div>
    </div>
  );
};

export default Countdown;
