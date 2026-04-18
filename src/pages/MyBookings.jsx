import { ScrollRestoration } from 'react-router-dom';
import BookingTable from '../components/myBookings/BookingTable';
import SectionHeading from '../components/ui/SectionHeading';

const MyBookings = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ScrollRestoration />
      <SectionHeading title="My Bookings" className="mb-8" />
      <BookingTable />
    </div>
  );
};

export default MyBookings;
