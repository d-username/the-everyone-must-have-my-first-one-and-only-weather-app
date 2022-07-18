function Details({ currentData }) {
  return (
    <div className='details'>
      <p className='weather-text'>{currentData.weatherText}</p>
    </div>
  );
}

export default Details;
