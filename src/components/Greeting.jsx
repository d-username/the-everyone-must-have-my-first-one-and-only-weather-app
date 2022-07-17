function Greeting() {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let now = new Date();
    let day = weekday[now.getDay()].toUpperCase();
    let dayPart;

    if (now.getHours() > 5 && now.getHours() <= 12) {
        dayPart = 'morning'
    }
    if (now.getHours() > 12 && now.getHours() <= 18) {
      dayPart = 'afternoon';
    }
    if (now.getHours() > 18 && now.getHours() <= 22) {
      dayPart = 'evening';
    }
    if (now.getHours() > 22 && now.getHours() <= 5) {
      dayPart = 'night';
    }

  return (
    <div className='greeting'>
      <p className="greeting-daypart">good {dayPart},</p>
      <p className="greeting-day">{day}</p>
    </div>
  );
}

export default Greeting;
