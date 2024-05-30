import { ScrollRestoration } from 'react-router-dom';
import BannerTop from '../components/Homie/BannerTop';
import Carousel from '../components/Homie/Carousel';
import FeaturedRooms from '../components/Homie/FeaturedRooms';
import HotelLocations from '../components/Homie/HotelLocations';
import NewsLetter from '../components/Homie/NewsLetter';
import Reviews from '../components/Homie/Reviews';
// import YoutubeEmbed from '../components/Homie/YoutubeEmbed';

const Home = () => {
    return (
        <div>
            <ScrollRestoration/>
            <BannerTop/>
            <Carousel/>
            {/* <YoutubeEmbed/> */}
            <FeaturedRooms/>
            <Reviews/>
            <HotelLocations/>
            <NewsLetter/>
        </div>
    );
};

export default Home;