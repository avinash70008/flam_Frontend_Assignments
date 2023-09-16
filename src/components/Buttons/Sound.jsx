import React, { useState } from 'react';
import './buttons.css'

export default function Sound() {
    const [sound, setSound] = useState(false);

  const toggleSound = () => {
    setSound((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleSound}
      className={`button ${sound ? 'button-on' : 'button-off'}`}>
        {sound ? '📢' : '📢'}
      </button>
      <p>Sound</p>
    </div>
  );
}

