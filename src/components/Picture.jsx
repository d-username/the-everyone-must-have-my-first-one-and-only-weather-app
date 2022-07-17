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
    snow: '#b3e5fc'
  };

  return (
    <div className='picture'>
      <div
        className='image-backdrop'
        style={{
          backgroundColor: backdropColours[currentConditions.weatherText]
        }}
      ></div>
      <img
        src={`/icons/${pictures[currentConditions.weatherText]}.png`}
        alt='sun'
        className='image'
      />
    </div>
  );
}

export default Picture;
