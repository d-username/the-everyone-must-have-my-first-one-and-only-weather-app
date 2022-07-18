function Day({currentData}) {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const minuteDifference = currentData.timezone / 60
  let now = new Date();
  now.setMinutes(now.getMinutes() + minuteDifference);
  now = new Date(now)

  let day = weekday[now.getDay()].toUpperCase();

  return (<p className='day'>{day}</p>);
}

export default Day;
