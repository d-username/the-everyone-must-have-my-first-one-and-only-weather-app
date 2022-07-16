function Temperature({currentConditions}) {
  return (
    <div className='temperature'>
        <span className='temperature-celsius'> {currentConditions.celsius} </span> 
        <span className='degree-sign'>°C</span>
      {/* <p>{currentConditions.fahrenheit}</p> */}
    </div>
  );
}

export default Temperature;
