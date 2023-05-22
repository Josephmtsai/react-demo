import './App.css';
import React, { useState, useEffect } from 'react';
import Clock from './clock';
function App() {
  const [input, setInput] = useState('');
  const [time, setTime] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    if (input.length === 4) {
      let digits = input.split('').map(Number);
      digits.sort((a, b) => b - a);

      let hours = digits[0] * 10 + digits[1];
      let minutes = digits[2] * 10 + digits[3];

      if (hours >= 24) hours = '0' + digits[0];
      if (minutes >= 60) minutes = '0' + digits[2];
      console.log(hours + minutes);
      setTime({ hours, minutes });
    }
  }, [input]);
  return (
    <div className='App'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={4}
      />
      <Clock hours={time.hours} minutes={time.minutes} />
    </div>
  );
}

export default App;
