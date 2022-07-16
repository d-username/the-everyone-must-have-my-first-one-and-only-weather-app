import './App.css';
import Search from './components/Search.jsx';
import Location from './components/Location';
import Temperature from './components/Temperature.jsx';
import Details from './components/Details.jsx';
import Picture from './components/Picture.jsx';

function App() {
  return (
    <div className='App-wrapper'>
      <Search />
      <Location />
      <Temperature />
      <Details />
      <Picture />
    </div>
  );
}

export default App;
