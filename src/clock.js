import React, { useState, useEffect } from 'react';
import './clock.css';
const Clock = ({ hours = 0, minutes = 0 }) => {
  const [hourHandStyle, setHourHandStyle] = useState({});
  const [minHandStyle, setMinHandStyle] = useState({});

  useEffect(() => {
    let hrPosition = (hours * 360) / 12 + (minutes * 360) / (12 * 60);
    let minPosition = (minutes * 360) / 60;

    setHourHandStyle({ transform: `rotate(${hrPosition}deg)` });
    setMinHandStyle({ transform: `rotate(${minPosition}deg)` });
  }, [hours, minutes]);

  return (
    <div className='clock'>
      <div className='hand hour-hand' style={hourHandStyle} />
      <div className='hand minute-hand' style={minHandStyle} />
      {Array.from({ length: 12 }, (_, i) => (
        <div
          className='number'
          key={i}
          style={{ transform: `rotate(${(i + 1) * 30}deg)` }}
        >
          <div
            className='num'
            style={{ transform: `rotate(${-(i + 1) * 30}deg)` }}
          >
            {i + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clock;
