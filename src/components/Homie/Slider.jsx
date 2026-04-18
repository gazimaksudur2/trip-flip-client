import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Slider = ({ each }) => {
  return (
    <div className="w-full h-full rounded-2xl flex flex-col md:flex-row-reverse items-center justify-evenly bg-base-200 px-6">
      <div className="w-full md:w-[45%] space-y-3 md:space-y-5 text-center md:text-left">
        <h2 className="font-jakarta text-gray-800 font-bold text-2xl md:text-4xl leading-tight">
          {each.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">{each.description}</p>
        <div className="flex flex-row justify-center md:justify-start items-center gap-3 pt-2">
          <Link to="/rooms">
            <Button>Discover More</Button>
          </Link>
          <Link to="/rooms">
            <Button variant="outline">View Rooms</Button>
          </Link>
        </div>
      </div>
      <img
        className="h-[40%] md:h-[70%] lg:w-[40%] object-cover rounded-2xl shadow-lg"
        src={each.url}
        alt={each.title}
      />
    </div>
  );
};

export default Slider;
