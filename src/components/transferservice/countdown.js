import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    updateTime(); // To set the initial time immediately

    return () => clearInterval(timerID); // Cleanup interval on component unmount
  }, []);

  function updateTime() {
    const cd = new Date();
    const nextTuesday = getNextTuesday(cd);
    const timeDiff = nextTuesday - cd;

    if (timeDiff > 0) {
      const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));
      const hours = totalHours % 24;
      const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
      const seconds = Math.floor(timeDiff / 1000) % 60;

      setTime(
        zeroPadding(totalHours, 2) + ':' +  // Show total hours, not wrapped in 24-hour format
        zeroPadding(minutes, 2) + ':' + 
        zeroPadding(seconds, 2)
      );
    } else {
      setTime('00:00:00');
    }

    setDate(
      zeroPadding(cd.getFullYear(), 4) + '-' + 
      zeroPadding(cd.getMonth() + 1, 2) + '-' + 
      zeroPadding(cd.getDate(), 2) + ' ' + 
      week[cd.getDay()]
    );
  }

  function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0'); // More concise zero-padding
  }

  function getNextTuesday(currentDate) {
    const dayOfWeek = currentDate.getDay();
    const daysUntilTuesday = (2 - dayOfWeek + 7) % 7;
    const nextTuesday = new Date(currentDate);
    nextTuesday.setDate(currentDate.getDate() + (daysUntilTuesday === 0 ? 7 : daysUntilTuesday)); // Fix issue if today is Tuesday
    nextTuesday.setHours(0, 0, 0, 0); // Set to midnight
    return nextTuesday;
  }

  return (
    <div className='div_main_countdown'>
      <div id="clock">
        <p className="date">{date}</p>
        <p className="time">{time}</p>
        <p className="text">Unlock Exclusive Discounts During Italy's Fashion Week!</p>
      </div>
    </div>
  );
};

export default Countdown;
