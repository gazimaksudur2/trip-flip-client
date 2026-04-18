import { Link } from 'react-router-dom';
import { MdPreview } from 'react-icons/md';
import StarRating from '../ui/StarRating';

const RoomCard = ({ room }) => {
  const { _id, room_title, room_description, customer_ratings, reviews, card_img, price_per_night } = room;

  return (
    <Link to={`/singleroom/${_id}`} state={{ id: _id }} className="block group">
      <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative overflow-hidden">
          <img
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            src={card_img}
            alt={room_title}
          />
          {price_per_night && (
            <span className="absolute top-3 right-3 bg-brand-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
              ${price_per_night} / night
            </span>
          )}
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800 font-jakarta group-hover:text-brand-600 transition-colors">
            {room_title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {room_description}
          </p>
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-800 font-source">
                {parseFloat(customer_ratings).toFixed(1)}
              </span>
              <StarRating value={customer_ratings} readOnly size={16} />
            </div>
            <div className="flex items-center gap-1.5 text-gray-500">
              <MdPreview className="text-brand-500" size={18} />
              <span className="text-sm font-medium">{reviews?.length || 0} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
