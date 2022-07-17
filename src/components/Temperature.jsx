import { useState } from 'react';

function Temperature({ currentConditions }) {

const [temperature, setTemperature] = useState(currentConditions.celsius)
const [primarySign, setPrimarySign] = useState('°C');
const [secondarySign, setSecondarySign] = useState('°F');


const changeUnit = () => {
  if (temperature === currentConditions.celsius) {
    setTemperature(currentConditions.fahrenheit);
    setPrimarySign('°F');
    setSecondarySign('°C');
  }
  if (temperature === currentConditions.fahrenheit) {
    setTemperature(currentConditions.celsius);
    setPrimarySign('°C');
    setSecondarySign('°F');
  }
}

  return (
    <div className='temperature'>
      <span className='temperature-number'>{temperature}</span>
      <span className='degree-sign'>
        <span className='primaryUnit-sign'>{primarySign}</span>
        <span
          className='secondaryUnit-sign'
          onClick={() => changeUnit()}
        >{secondarySign}</span>
      </span>
    </div>
  );
}

export default Temperature;
