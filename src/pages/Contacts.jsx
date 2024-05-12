import React from 'react';
import SwiperSlider from '../components/Rooms/SwiperSlider';
import MySlider from '../components/contacts_comps/MySlider';

const Contacts = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold font-source'>This is from Contacts</h2>
            <div className='py-10'>
                <SwiperSlider />
                {/* <MySlider/> */}
            </div>
        </div>
    );
};

export default Contacts;