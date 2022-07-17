import './App.css';
import MainWrapper from './components/MainWrapper.jsx';
import Search from './components/Search.jsx';
import Content from './components/Content.jsx';

import { useState } from 'react';
function App() {
  const [currentData, setCurrentData] = useState();

  return (
    <div className='App'>
      <MainWrapper>
        <Search currentData={currentData} setCurrentData={setCurrentData} />
        {currentData && <Content currentData={currentData} />}
      </MainWrapper>
    </div>
  );
}

export default App;

// TODO: show the correct daypart, and greeting. - FOR THIS I NEED TO WAIT FOR THE API TO BE AVAILABLE.
