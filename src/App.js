import './App.css';
import MainWrapper from './components/MainWrapper.jsx';
import Search from './components/Search.jsx';
import Content from './components/Content.jsx';

import { useState } from 'react';
function App() {
  const [currentLocation, setCurrentLocation] = useState({
    city: 'Budapest',
    country: 'Hungary',
  });
  const [currentConditions, setCurrentConditions] = useState({
    celsius: 25,
    fahrenheit: 42,
    weatherText: 'mostlySunny',
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
// TODO: styling, image backdrop, mayme slightly larger, some colours too bright ? - and maybe face in animation when change.
// TODO: image a bit larger maybe.
// TODO: option for fahrenhait.
