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

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (j !== i) {
            let hours = digits[i] * 10 + digits[j];
            let minutes = digits[6 - i - j] * 10 + digits[3 - i - j];
            if (hours < 24 && minutes < 60) {
              setTime({ hours, minutes });
              return;
            }
          }
        }
      }
      setTime({ hours: 0, minutes: 0 });
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
