import React, { useState } from 'react';
import './buttons.css'

export default function Bluethooth() {
    const [bluethooth, setBluethooth] = useState(false);

  const toggleBluetooth = () => {
    setBluethooth((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleBluetooth}
      className={`button ${bluethooth ? 'button-on' : 'button-off'}`}>
        {bluethooth ? '🅱️' : '🅱️'}
      </button>
      <p>Bluetooth</p>
    </div>
  );
}

