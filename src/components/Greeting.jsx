function Greeting({ currentData }) {
  const timeDifference = currentData.timezone / 3600;
  const now = new Date();
  const timeInUTC = now.getUTCHours();
  const localTime = timeInUTC + timeDifference;
  let dayPart;

    
  if (localTime > 5 && localTime <= 12) {
    dayPart = 'morning';
  }
  else if (localTime > 12 && localTime <= 18) {
    dayPart = 'afternoon';
  }
  else if (localTime > 18 && localTime <= 22) {
    dayPart = 'evening';
  }
  else if (localTime > 22 || localTime <= 5) {
    dayPart = 'night';
  }

  return (
    <div className='greeting'>
      <p className='greeting-daypart'>good {dayPart},</p>
    </div>
  );
}

export default Greeting;
