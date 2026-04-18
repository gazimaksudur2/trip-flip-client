import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ReviewTestimonial from './ReviewTestimonial';
import SectionHeading from '../ui/SectionHeading';
import Spinner from '../ui/Spinner';
import { useAllReviewsQuery } from '../../hooks/useReviewQueries';

const Reviews = () => {
  const { data, isLoading, isError } = useAllReviewsQuery();
  const slides = data?.length ? data.slice(Math.max(0, data.length - 6)) : [];

  return (
    <section className="py-12 lg:py-16">
      <SectionHeading
        title="What Clients Are Saying"
        subtitle="Discover why our customers love us! Read real reviews and testimonials from satisfied clients who have experienced our exceptional service."
        className="mb-8 px-4"
      />

      {isLoading && (
        <div className="flex justify-center py-12">
          <Spinner size="lg" />
        </div>
      )}
      {isError && (
        <p className="text-center text-error">Reviews could not be loaded.</p>
      )}

      {!isLoading && !isError && slides.length > 0 && (
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-brand-50 rounded-3xl py-8 px-4">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              pagination={{ clickable: true }}
              navigation={true}
              loop={slides.length > 1}
              modules={[Pagination, Navigation]}
              className="w-full"
              style={{ minHeight: '300px' }}
            >
              {slides.map((each) => (
                <SwiperSlide key={each._id}>
                  <ReviewTestimonial each={each} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
