import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
// import Slider from './Slider';
// import ReviewCard from './ReviewCard';
import ReviewTestimonial from './ReviewTestimonial';
import axios from 'axios';

const Reviews = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://server-seven-gamma-70.vercel.app/reviews')
            .then(res=>{
                // console.log(res.data);
                setData(res.data);
            })
            .catch(error=>{
                console.log(error.message);
            })
    }, [])

    // console.log(data);
    return (
        <div>
            <section className="relative lg:py-10 lg:w-[80%] mx-auto">
                <div className="lg:w-[60%] container mx-auto px-4">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
                        What clients saying
                    </h1>
                    <div className="flex justify-center mx-auto mt-2 mb-5">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>
                    <p className="text-gray-700 font-normal font-source text-center mb-8">Discover why our customers love us! Read real reviews and testimonials from satisfied clients who have experienced our exceptional service and found their dream properties.</p>
                </div>
                <div className='w-full'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        modules={[Pagination]}
                        className="mySwiper w-full h-[60vh] bg-white rounded-3xl"
                    >
                        {
                            data && data.slice(0,5)?.map(each => (<SwiperSlide key={each._id} className='relative bg-blue-50'>
                                <ReviewTestimonial each={each} />
                            </SwiperSlide>))
                        }
                    </Swiper>
                </div>
                {/* <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10'>
                {
                    data && data.map((dat, idx) => (<ReviewCard key={idx} data={dat} />))
                }
            </div> */}
            </section >
        </div>
    );
};

export default Reviews;