import React from 'react';
// import SwiperSlider from '../components/Rooms/SwiperSlider';
import BookingTable from '../components/myBookings/BookingTable';

const MyBookings = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold font-source'>This is from My MyBookings</h2>
            <div className='w-[85%] mx-auto py-8'>
                <BookingTable />
            </div>
        </div>
    );
};

export default MyBookings;