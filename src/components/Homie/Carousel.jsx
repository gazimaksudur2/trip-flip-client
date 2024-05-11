import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Slider from './Slider';


const Carousel = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('carousel.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setContent(data);
            })
    }, [])

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
                        content && content?.map(each => (<SwiperSlide key={each.id}>
                            <Slider each={each} />
                        </SwiperSlide>))
                    }
                    <SwiperSlide>Extra Slide</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;