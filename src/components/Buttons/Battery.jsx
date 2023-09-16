import React, { useState } from 'react';
import './buttons.css'
export default function Battery() {
  const [battery, setBattery] = useState(false);

  const toggleBattery = () => {
    setBattery((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleBattery}
      className={`button ${battery ? 'button-on' : 'button-off'}`}>
        {battery ? '⚡' : '⚡'}
      </button>
      <p>Charge</p>
    </div>
  );
}


