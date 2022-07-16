function Temperature({currentConditions}) {
  return (
    <div className='temperature'>
      <p>{currentConditions.celsius}</p>
      <p>{currentConditions.fahrenheit}</p>
    </div>
  );
}

export default Temperature;
