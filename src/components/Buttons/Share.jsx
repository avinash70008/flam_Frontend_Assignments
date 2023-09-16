import React, { useState } from 'react';
import './buttons.css'

export default function Share() {
    const [wifiEnabled, setWifiEnabled] = useState(false);

  const toggleShare = () => {
    setWifiEnabled((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleShare}
      className={`button ${wifiEnabled ? 'button-on' : 'button-off'}`}>
        {wifiEnabled ? '↗️' : '↗️'}
      </button>
      <p>Share</p>
    </div>
  );
}

