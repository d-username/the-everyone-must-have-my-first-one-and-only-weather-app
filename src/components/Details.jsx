function Details({ currentConditions }) {

  return (
    <div className='details'>
      <p>{currentConditions.weatherText}</p>
      <p>{currentConditions.UVIndexText}</p>
    </div>
  );
}

export default Details;
