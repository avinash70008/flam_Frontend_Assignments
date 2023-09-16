import React, { useState } from 'react';
import './buttons.css'
export default function Music() {
  const [music, setMusic] = useState(false);

  const toggleMusic = () => {
    setMusic((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleMusic}
      className={`button ${music ? 'button-on' : 'button-off'}`}>
        {music ? '🎵' : '🎵'}
      </button>
      <p>Music</p>
    </div>
  );
} 

