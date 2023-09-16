import React, { useState } from 'react';
import './buttons.css'

export default function SOS() {
    const [SOS, setSOS] = useState(false);

  const toggleSOS = () => {
    setSOS((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleSOS}
      className={`button ${SOS ? 'button-on' : 'button-off'}`}>
        {SOS ? '🆘' : '🆘'}
      </button>
      <p>SOS</p>
    </div>
  );
}

