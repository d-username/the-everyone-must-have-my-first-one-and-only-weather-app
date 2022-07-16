import { useState, useEffect } from 'react';

function Search() {
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [locationKey, setLocationKey] = useState('');

  // i am going to need 2 API calls, first for the locationKey then for the current conditions.

  // API call for the locationKey:
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=jr5AaGayfOxj6lpq51dE355zXZ5oID9P&q=${searchText}&language=en-uk&details=false&offset=1`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log('this is the key', data[0].Key);
        setLocationKey(data[0].Key);
        console.log('this is the location data: ,', data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchText]);

  // now that i have the location key, i can fetch the current conditions for the location.
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=jr5AaGayfOxj6lpq51dE355zXZ5oID9P&details=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('this is the weather data ', data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [locationKey]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked enter, so you submitted this:', inputText);
    setSearchText(inputText);
    setInputText('');
  };

  return (
    <form className='search' onSubmit={(e) => handleSubmit(e)}>
      <input
        type='search'
        id='search'
        name='search'
        placeholder='Search'
        value={inputText}
        onChange={(e) => setInputText(e.target.value.toLowerCase())}
      ></input>
    </form>
  );
}

export default Search;

