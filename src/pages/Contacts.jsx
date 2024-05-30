// import VisitStores from '../components/contacts_comps/VisitStores';
import GetInTouch from '../components/contacts_comps/GetInTouch';
import Faqs from '../components/contacts_comps/Faqs';
import { ScrollRestoration } from 'react-router-dom';
// import SwiperSlider from '../components/Rooms/SwiperSlider';
// import MySlider from '../components/contacts_comps/MySlider';

const Contacts = () => {
    return (
        <div>
            <div className='py-2 w-[90%] mx-auto'>
                <ScrollRestoration/>
                {/* <SwiperSlider /> */}
                {/* <MySlider/> */}
                <Faqs/>
                <GetInTouch/>
            </div>
        </div>
    );
};

export default Contacts;