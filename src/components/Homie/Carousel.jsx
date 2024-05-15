import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Slider from './Slider';
import axios from 'axios';


const Carousel = () => {
    const [content, setContent] = useState([]);

    // useEffect(() => {
    //     fetch('carousel.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setContent(data);
    //         })
    // }, [])

    useEffect(()=>{
        axios.get('https://server-seven-gamma-70.vercel.app/carousel')
            .then(res=> {
                // console.log(res.data);
                setContent(res.data)
            })
    },[]);

    return (
        <div className='my-4 md:my-10 space-y-6 flex flex-col justify-center items-center text-center'>
            <div className="px-[4%] md:px-[15%] space-y-3 flex flex-col justify-center items-center">
                <h2 className='text-3xl font-jakarta font-bold'>Indulge in Unrivaled Luxury</h2>
                <p className='font-source'>Escape to a realm of opulence and sophistication with our luxury hotel rooms. Immerse yourself in unparalleled comfort and elegance, where every detail is meticulously crafted to elevate your stay.</p>
            </div>
            <div className='h-[60vh] w-[85%] mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-full rounded-3xl"
                >
                    {
                        content && content?.map(each => (<SwiperSlide key={each._id}>
                            <Slider each={each} />
                        </SwiperSlide>))
                    }
                    <SwiperSlide>
                        <div className="w-full h-full rounded-lg flex flex-row-reverse items-center justify-evenly">
                            <div className="space-y-4 w-[40%]">
                                <h2 className="font-montserrat text-[#151515cd] font-bold text-5xl">Modern King Room</h2>
                                <h4 className="font-nunito text-[#15151590]">Experience luxury and comfort in our Modern King Room. Immerse yourself in contemporary design and upscale amenities for a truly unforgettable stay.</h4>
                                <div className="py-6 flex flex-row justify-center items-center gap-4">
                                    <button className="btn btn-primary">Discover More</button>
                                    <button className="btn btn-outline">Latest Allocation</button>
                                </div>
                            </div>
                            <img className="h-[50%] w-[40%] object-cover rounded-2xl" src="https://img.freepik.com/premium-photo/illuminated-electric-lamp-by-bed-home_1048944-2406546.jpg?w=996" alt="bannerImages" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;