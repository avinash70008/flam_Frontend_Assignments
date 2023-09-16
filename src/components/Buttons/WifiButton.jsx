import React, { useState } from 'react';
import './buttons.css'
export default function WifiButton() {
  const [wifiEnabled, setWifiEnabled] = useState(false);

  const toggleWifi = () => {
    setWifiEnabled((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleWifi}
      className={`button ${wifiEnabled ? 'button-on' : 'button-off'}`}>
        {wifiEnabled ? 'ᯤ' : 'ᯤ'}
      </button>
      <p>WIFI</p>
    </div>
  );
}


