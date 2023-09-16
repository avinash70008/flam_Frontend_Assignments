import React, { useState } from 'react';
import './buttons.css'

export default function Notification() {
    const [notification, setNotification] = useState(false);

  const toggleNotify = () => {
    setNotification((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleNotify}
      className={`button ${notification ? 'button-on' : 'button-off'}`}>
        {notification ? '🔔' : '🔔'}
      </button>
      <p>Notify</p>
    </div>
  );
}

