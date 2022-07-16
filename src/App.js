import './App.css';
import Search from './components/Search.jsx';
import Location from './components/Location.jsx';
import Temperature from './components/Temperature.jsx';
import Details from './components/Details.jsx';
import Greeting from './components/Greeting.jsx';
import Picture from './components/Picture.jsx';

import { useState } from 'react';

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    city: '',
    country: '',
  });
  const [currentConditions, setCurrentConditions] = useState({
    celsius: null,
    fahrenheit: null,
    weatherText: '',
    UVIndexText: '',
  });

  return (
    <div className='App-wrapper'>
      <Search
        setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
        currentConditions={currentConditions}
        setCurrentConditions={setCurrentConditions}
      />
      <Location currentLocation={currentLocation} />
      <Temperature currentConditions={currentConditions} />
      <Details currentConditions={currentConditions} />
      <Greeting />
      <Picture />
    </div>
  );
}

export default App;
