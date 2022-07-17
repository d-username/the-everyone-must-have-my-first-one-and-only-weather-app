import './App.css';
import MainWrapper from './components/MainWrapper.jsx';
import Search from './components/Search.jsx';
import Content from './components/Content.jsx';

import { useState } from 'react';
function App() {
  const [currentLocation, setCurrentLocation] = useState({
    city: 'venice',
    country: 'Italy',
  });
  const [currentConditions, setCurrentConditions] = useState({
    celsius: 25,
    fahrenheit: 43,
    weatherText: 'Mostly Cloudy',
    UVIndexText: 'low',
  });

  const [showContent, setShowContent] = useState(true);

  return (
    <div className='App'>
      <MainWrapper>
        <Search
          setCurrentLocation={setCurrentLocation}
          currentLocation={currentLocation}
          currentConditions={currentConditions}
          setCurrentConditions={setCurrentConditions}
          setShowContent={setShowContent}
          showContent={showContent}
        />
        {showContent && (
          <Content
            currentLocation={currentLocation}
            currentConditions={currentConditions}
          />
        )}
      </MainWrapper>
    </div>
  );
}

export default App;

// FIXME: the locationKey is not always what i look for, for example London is also in Nigeria. - FOR THIS I NEED TO WAIT FOR THE API TO BE AVAILABLE.
// TODO: show the correct daypart, and greeting. - FOR THIS I NEED TO WAIT FOR THE API TO BE AVAILABLE.
