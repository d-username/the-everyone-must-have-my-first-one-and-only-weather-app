import { useState, useEffect } from 'react';

function Search({
  setCurrentLocation,
  currentLocation,
  currentConditions,
  setCurrentConditions,
  setShowContent,
  showContent,
}) {
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [locationKey, setLocationKey] = useState('');

  // i am going to need 2 API calls, first for the locationKey then for the current conditions.

  // API call for the locationKey:
  useEffect(() => {
    fetch(
      // `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=jr5AaGayfOxj6lpq51dE355zXZ5oID9P&q=${searchText}&language=en-uk&details=false&offset=1`
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
        console.log(
          'here the current locations cupposed to be: ',
          currentLocation,
          'and the location key ',
          locationKey
        );
      })

      .catch((err) => {
        console.log(err.message);
      });
  }, [searchText]);

  // now that i have the location key, i can fetch the current conditions for the location.
  useEffect(() => {
    fetch(
      // `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=jr5AaGayfOxj6lpq51dE355zXZ5oID9P&details=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('this is the weather data ', data);
        setCurrentConditions({
          ...currentConditions,
          celsius: Math.round(data[0].Temperature.Metric.Value),
          fahrenheit: Math.round(data[0].Temperature.Imperial.Value),
          weatherText: data[0].WeatherText,
          UVIndexText: data[0].UVIndexText,
        });
        setShowContent(true);
        console.log(
          'this is the 2nd fetch, and this this the currentConditions fetched: ',
          currentConditions,
          'and the show content should be true here ',
          showContent
        );
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
        className='search-field'
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

