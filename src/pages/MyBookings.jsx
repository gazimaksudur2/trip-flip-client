import React from 'react';
import SwiperSlider from '../components/Rooms/SwiperSlider';

const MyBookings = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold font-source'>This is from My MyBookings</h2>
            <div className='w-full h-[60vh]'>
                <SwiperSlider />
            </div>
        </div>
    );
};

export default MyBookings;