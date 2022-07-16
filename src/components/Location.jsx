function Location({currentLocation}) {
  return <div className='location'>
    <h2 className="location-city">{currentLocation.city}</h2>
    <h3 className="location-country">{currentLocation.country}</h3>
  </div>;
}

export default Location;
