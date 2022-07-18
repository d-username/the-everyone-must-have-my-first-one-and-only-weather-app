function Greeting({ currentData }) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const timeDifference = currentData.timezone / 3600;
  
  let now = new Date();
  const timeInUTC = now.getUTCHours();
  const locatTime = timeInUTC + timeDifference;

  let day = weekday[now.getDay()].toUpperCase();
  let dayPart;
    
  if (locatTime > 5 && locatTime <= 12) {
    dayPart = 'morning';
  }
  if (locatTime > 12 && locatTime <= 18) {
    dayPart = 'afternoon';
  }
  if (locatTime > 18 && locatTime <= 22) {
    dayPart = 'evening';
  }
  if (locatTime > 22 && locatTime <= 5) {
    dayPart = 'night';
  }

  return (
    <div className='greeting'>
      <p className='greeting-daypart'>good {dayPart},</p>
      <p className='greeting-day'>{day}</p>
    </div>
  );
}

export default Greeting;
