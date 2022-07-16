function Location({currentLocation}) {
  return <div className='location'>
    <h2>{currentLocation.city}</h2>
    <h3>{currentLocation.country}</h3>
  </div>;
}

export default Location;
