import { useState } from 'react';
import './buttons.css'

export default function Airplane() {
    const [airplane, setAirplane] = useState(false);

  const toggleAirplane = () => {
    setAirplane((prev) => !prev);
  };

  return (
    <div className='main'>
      <button onClick={toggleAirplane}
      className={`button ${airplane ? 'button-on' : 'button-off'}`}>
        {airplane ? '✈︎' : '✈︎'}
      </button>
      <p>Airplane</p>
    </div>
  );
}

