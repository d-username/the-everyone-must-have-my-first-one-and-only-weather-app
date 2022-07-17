import Location from './Location.jsx';
import Temperature from './Temperature.jsx';
import Details from './Details.jsx';
import Greeting from './Greeting.jsx';
import Picture from './Picture.jsx';

const Content = ({ currentData }) => {
  return (
    <div className='content'>
      <Location currentData={currentData} />
      <Picture currentData={currentData} />
      <Temperature currentData={currentData} />
      <Details currentData={currentData}  />
      <Greeting currentData={currentData}/>
    </div>
  );
};

export default Content;
