import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const RoomHeader = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-8">
      <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-brand-500 transition-colors">Home</Link>
        <FiChevronRight size={14} />
        <span className="text-gray-800 font-medium">Rooms</span>
      </nav>
      <SectionHeading
        title="Explore Our Rooms"
        subtitle="Find the perfect room for your stay. Browse our selection of luxury accommodations and book your dream getaway."
      />
    </div>
  );
};

export default RoomHeader;
