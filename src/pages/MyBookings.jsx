// import SwiperSlider from '../components/Rooms/SwiperSlider';
import { ScrollRestoration } from 'react-router-dom';
import BookingTable from '../components/myBookings/BookingTable';

const MyBookings = () => {
    return (
        <div>
            <ScrollRestoration/>
            <div className='w-[85%] mx-auto py-8'>
                <BookingTable />
            </div>
        </div>
    );
};

export default MyBookings;