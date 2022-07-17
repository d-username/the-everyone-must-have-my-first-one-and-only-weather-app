import Location from './Location.jsx';
import Temperature from './Temperature.jsx';
import Details from './Details.jsx';
import Greeting from './Greeting.jsx';
import Picture from './Picture.jsx';

const Content = ({currentLocation, currentConditions}) => {
  return (
    <div className='content'>
      <Location currentLocation={currentLocation} />
      <Picture currentConditions={currentConditions} />
      <Temperature currentConditions={currentConditions} />
      <Details currentConditions={currentConditions} />
      <Greeting />
    </div>
  );
};

export default Content;
