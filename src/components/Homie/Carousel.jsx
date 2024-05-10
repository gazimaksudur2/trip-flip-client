// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { useEffect, useState } from 'react';
// import Slider from './Slider';


// const Carousel = () => {
//   const [content, setContent] = useState([]);

// //   useEffect(()=>{
// //     fetch('Carousel.json')
// //     .then(res=>res.json())
// //     .then(data=>{
// //       // console.log(data);
// //       setContent(data);
// //     })
// //   }, [])
//     return (
//         <div className='h-[85vh] w-[85%] mx-auto'>
//           <Swiper
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             loop={true}
//             navigation={true}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="mySwiper w-full h-full"
//           >
//             {
//               content && content?.map(each=>(<SwiperSlide key={each.id}>
//                 <Slider each={each}/>
//               </SwiperSlide>))
//             }
//             {/* <SwiperSlide>Extra Slide</SwiperSlide> */}
//           </Swiper>
//         </div>
//       );
// };

// export default Carousel;

import React from 'react';

const Carousel = () => {
    return (
        <div>
            
        </div>
    );
};

export default Carousel;