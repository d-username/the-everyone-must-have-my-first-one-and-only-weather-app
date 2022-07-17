function Details({ currentData }) {
  return (
    <div className='details'>
      <p className='weather-text'>{currentData.weatherText}</p>
      {/* <p>{currentData.description}</p> */}
    </div>
  );
}

export default Details;
