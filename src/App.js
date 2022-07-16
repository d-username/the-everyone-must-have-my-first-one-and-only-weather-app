import './App.css';
import Search from './components/Search.jsx';
import Location from './components/Location.jsx';
import Temperature from './components/Temperature.jsx';
import Details from './components/Details.jsx';
import Greeting from './components/Greeting.jsx';
import Picture from './components/Picture.jsx';
import MainWrapper from './components/MainWrapper';

import { useState } from 'react';
function App() {
  const [currentLocation, setCurrentLocation] = useState({
    city: 'London',
    country: 'United Kingdom',
  });
  const [currentConditions, setCurrentConditions] = useState({
    celsius: 27,
    fahrenheit: 84,
    weatherText: '',
    UVIndexText: 'low',
  });

  return (
    <div className='App'>
      <MainWrapper>
        <Search
          setCurrentLocation={setCurrentLocation}
          currentLocation={currentLocation}
          currentConditions={currentConditions}
          setCurrentConditions={setCurrentConditions}
        />
        <Location currentLocation={currentLocation} />
        <Picture currentConditions={currentConditions} />
        <Temperature currentConditions={currentConditions} />
        <Details currentConditions={currentConditions} />
        <Greeting />
      </MainWrapper>
    </div>
  );
}

export default App;
