import BannerTop from '../components/Homie/BannerTop';
import Carousel from '../components/Homie/Carousel';
import FeaturedRooms from '../components/Homie/FeaturedRooms';
import HotelLocations from '../components/Homie/HotelLocations';
import NewsLetter from '../components/Homie/NewsLetter';
import Reviews from '../components/Homie/Reviews';

const Home = () => {
    return (
        <div>
            <BannerTop/>
            <HotelLocations/>
            <Carousel/>
            <FeaturedRooms/>
            <Reviews/>
            <NewsLetter/>
        </div>
    );
};

export default Home;