function Picture({ currentConditions }) {

  const pictures = {
    sunny: 'sunny',
    mostlySunny: 'mostly-sunny',
    mostlyCloudy: 'mostly-cloudy',
    cloudy: 'clouds',
    sunAndRain: 'sun-and-rain',
    rain: 'rain',
    thunder: 'lightning',
    fog: 'fog',
    snow: 'snowflake',
    wind: 'wind',
  };

  const backdropColours = {
    sunny: '#EED448',
    mostlySunny: '#e6ee9c',
    mostlyCloudy: '#80cbc4',
    cloudy: '#bdbdbd',
    sunAndRain: '#ce93d8',
    rain: '#83A6F4',
    thunder: '#bcaaa4',
    fog: '#90a4ae',
    snow: '#b3e5fc',
    wind: '#cddc39',
  };

  const availableWeatherText = {
    sunny: ['Sunny'],
    mostlySunny: [
      'Mostly Sunny',
      'Partly Sunny',
      'Intermittent Clouds',
      'Partly Sunny w/ Flurries',
    ],
    mostlyCloudy: [
      'Hazy Sunshine',
      'Mostly Cloudy',
      'Mostly Cloudy w/ Flurries',
    ],
    cloudy: ['Cloudy', 'Dreary (Overcast)', 'Flurries'],
    sunAndRain: [
      'Partly Sunny w/ Showers',
      'Partly Sunny w/ T-Storms',
      'Mostly Cloudy w/ Showers',
    ],
    rain: ['Showers', 'Rain'],
    thunder: ['T-Storms', 'Mostly Cloudy w/ T-Storms'],
    fog: ['Fog'],
    snow: ['Snow', 'Mostly Cloudy w/ Snow'],
    wind: ['Windy'],
  };


 let displayVisual = ''

  for (const [key, value] of Object.entries(availableWeatherText)) {
    if (value.includes(currentConditions.weatherText)) {
      console.log('the key is: ', key);
      displayVisual = key
    }
  }

  return (
    <div className='picture'>
      <div
        className='image-backdrop'
        style={{
          backgroundColor: backdropColours[displayVisual],
        }}
      ></div>
      <img
        src={`/icons/${pictures[displayVisual]}.png`}
        alt='sun'
        className='image'
      />
    </div>
  );
}

export default Picture;
