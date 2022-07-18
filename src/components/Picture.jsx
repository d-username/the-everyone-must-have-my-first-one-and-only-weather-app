function Picture({ currentData }) {
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
    nightClear: 'night-clear-moon',
    nightFewClouds: 'night-few-clouds',
    nightRain: 'night-rain',
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
    nightClear: '#ffcdd2',
    nightFewClouds: '#90caf9',
    nightRain: '#9fa8da',
  };

  const availableWeatherText = {
    sunny: ['01d'],
    mostlySunny: ['02d'],
    mostlyCloudy: ['03d', '03n'],
    cloudy: ['04d', '04n'],
    rain: ['09d', '09n'],
    sunAndRain: ['10d'],
    thunder: ['11d', '11n'],
    snow: ['13d', '13n'],
    fog: ['50d', '50n'],
    wind: [''],
    nightClear: ['01n'],
    nightFewClouds: ['02n'],
    nightRain: ['10n']
  };

  let displayVisual = '';

  for (const [key, value] of Object.entries(availableWeatherText)) {
    if (value.includes(currentData.icon)) {
      displayVisual = key;
    }
  }

  const backdropStyle = {
    backgroundColor: backdropColours[displayVisual],
    boxShadow: `0px 0px 20px 20px ${backdropColours[displayVisual]}`,
  };

  return (
    <div className='picture'>
      <div className='image-backdrop' style={backdropStyle}></div>
      <img
        src={`/icons/${pictures[displayVisual]}.png`}
        alt='sun'
        className='image'
      />
    </div>
  );
}

export default Picture;
