import VisitStores from '../components/contacts_comps/VisitStores';
import GetInTouch from '../components/contacts_comps/GetInTouch';
// import SwiperSlider from '../components/Rooms/SwiperSlider';
// import MySlider from '../components/contacts_comps/MySlider';

const Contacts = () => {
    return (
        <div>
            <div className='py-2 w-[90%] mx-auto'>
                {/* <SwiperSlider /> */}
                {/* <MySlider/> */}
                <VisitStores/>
                <GetInTouch/>
            </div>
        </div>
    );
};

export default Contacts;