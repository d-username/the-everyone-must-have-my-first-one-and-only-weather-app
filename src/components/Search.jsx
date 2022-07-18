import { useState, useEffect } from 'react';

function Search({currentData, setCurrentData}) {
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=50a8510e7671dce1c3f960bde80bf403&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentData({
          ...currentData,
          city: data.name,
          country: data.sys.country,
          celsius: data.main.temp,
          weatherText: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          timezone: data.timezone
        });
      })
      .catch((err) => {
        console.error(err.message)
      });
    // eslint-disable-next-line
  }, [searchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
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

