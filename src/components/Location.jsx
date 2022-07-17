function Location({ currentData }) {
  return (
    <div className='location'>
      <h2 className='location-city'>{currentData.city}</h2>
      <h3 className='location-country'>{currentData.country}</h3>
    </div>
  );
}

export default Location;
