import { useState, useEffect } from 'react';

function Search({
  setCurrentLocation,
  currentLocation,
  CurrentConditions,
  setCurrentConditions
}) {
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
        console.log('this is the location data: ,', data);
        setLocationKey(data[0].Key);
        setCurrentLocation({
          ...currentLocation,
          city: data[0].EnglishName,
          country: data[0].Country.EnglishName,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchText]);

  // FIXME: the locationKey is not always what i look for, for example London is also in Nigeria.

  // now that i have the location key, i can fetch the current conditions for the location.
  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=jr5AaGayfOxj6lpq51dE355zXZ5oID9P&details=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('this is the weather data ', data);
        setCurrentConditions({
          ...CurrentConditions,
          celsius: Math.round(data[0].Temperature.Metric.Value),
          fahrenheit: Math.round(data[0].Temperature.Imperial.Value),
          weatherText: data[0].WeatherText,
          UVIndexText: data[0].UVIndexText,
        });
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

