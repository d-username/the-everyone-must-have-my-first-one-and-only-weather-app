function Details({ currentConditions }) {

  return (
    <div className='details'>
      <p className="weather-text">{currentConditions.weatherText}</p>
      {/* <p>{currentConditions.UVIndexText}</p> */}
    </div>
  );
}

export default Details;
