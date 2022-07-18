import { useState, useEffect } from 'react';

function Temperature({ currentData }) {
  const celsius = Math.round(currentData.celsius);
  const fahrenheit = Math.round(celsius * 1.8 + 32)
  const [temperature, setTemperature] = useState(celsius);
  const [primarySign, setPrimarySign] = useState('°C');
  const [secondarySign, setSecondarySign] = useState('°F');

  useEffect(() => {
    setTemperature(celsius);
    // eslint-disable-next-line
  }, [currentData]); 

  const changeUnit = () => {
    if (temperature === celsius) {
      setTemperature(fahrenheit);
      setPrimarySign('°F');
      setSecondarySign('°C');
    }
    if (temperature === fahrenheit) {
      setTemperature(celsius);
      setPrimarySign('°C');
      setSecondarySign('°F');
    }
  };

  return (
    <div className='temperature'>
      <span className='temperature-number'>{temperature}</span>
      <span className='degree-sign'>
        <span className='primaryUnit-sign'>{primarySign}</span>
        <span className='secondaryUnit-sign' onClick={() => changeUnit()}>
          {secondarySign}
        </span>
      </span>
    </div>
  );
}

export default Temperature;
