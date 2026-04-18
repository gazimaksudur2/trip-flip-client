import StarRating from '../ui/StarRating';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewTestimonial = ({ each }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={each.roomImg}
          className="w-14 h-10 rounded-lg shadow object-cover"
          alt={each.roomTitle}
        />
        <h3 className="text-lg font-semibold text-gray-800 font-jakarta">{each.roomTitle}</h3>
      </div>

      <FaQuoteLeft className="text-brand-300 mb-3" size={24} />

      <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
        {each.review}
      </p>

      <div className="flex flex-col items-center gap-2">
        <StarRating value={each.rating} readOnly size={18} />
        <img
          className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-200"
          src={each.clientPhoto}
          alt={each.client}
        />
        <div>
          <p className="font-semibold text-gray-800 text-sm">{each.client}</p>
          <p className="text-xs text-gray-400">
            {each.clientEmail || 'Guest reviewer'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewTestimonial;
