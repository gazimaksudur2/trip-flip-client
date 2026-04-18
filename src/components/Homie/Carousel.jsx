import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
import SectionHeading from '../ui/SectionHeading';
import Spinner from '../ui/Spinner';
import { useCarouselQuery } from '../../hooks/useContentQueries';

const Carousel = () => {
  const { data: content = [], isLoading } = useCarouselQuery();

  return (
    <section className="py-12 lg:py-16">
      <SectionHeading
        title="Indulge in Unrivaled Luxury"
        subtitle="Escape to a realm of opulence and sophistication with our luxury hotel rooms. Immerse yourself in unparalleled comfort and elegance."
        className="mb-8 px-4"
      />

      <div className="max-w-6xl mx-auto px-4">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Spinner size="lg" />
          </div>
        ) : content.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No carousel content available.</p>
        ) : (
          <div className="h-[50vh] lg:h-[60vh]">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={content.length > 1}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full h-full rounded-2xl"
            >
              {content.map((each) => (
                <SwiperSlide key={each._id}>
                  <Slider each={each} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Carousel;
