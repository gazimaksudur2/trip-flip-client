import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiChevronRight, FiChevronLeft, FiChevronRight as FiRight, FiWifi, FiTv, FiCoffee } from "react-icons/fi";
import { MdPool, MdFitnessCenter, MdRoomService, MdLocalParking, MdAir } from "react-icons/md";
import ReviewModal from "./ReviewModal";
import BookModal from "./BookModal";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Badge from "../ui/Badge";
import { AuthContext } from "../../providers/AuthProvider";
import { useRoomQuery } from "../../hooks/useRoomQueries";

const FACILITY_ICONS = {
  'wifi': FiWifi, 'tv': FiTv, 'coffee': FiCoffee,
  'pool': MdPool, 'gym': MdFitnessCenter, 'room service': MdRoomService,
  'parking': MdLocalParking, 'air conditioning': MdAir,
};

const getFacilityIcon = (facility) => {
  const key = facility.toLowerCase();
  for (const [k, Icon] of Object.entries(FACILITY_ICONS)) {
    if (key.includes(k)) return Icon;
  }
  return null;
};

const SingleRoom = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const { data: roomData, isLoading, isError } = useRoomQuery(id, user?.email);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isError || !roomData) {
    return (
      <div className="text-center py-20 space-y-4">
        <p className="text-error text-lg">We could not load this room.</p>
        <Link to="/rooms">
          <Button variant="outline">Back to rooms</Button>
        </Link>
      </div>
    );
  }

  const {
    _id, room_title, room_description, room_size,
    price_per_night, availability, facilities,
    special_offers, features, room_images = [],
  } = roomData;

  const handlePrev = () => {
    if (!room_images.length) return;
    setImgIndex((v) => (v - 1 + room_images.length) % room_images.length);
  };
  const handleNext = () => {
    if (!room_images.length) return;
    setImgIndex((v) => (v + 1) % room_images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-1 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-brand-500 transition-colors">Home</Link>
          <FiChevronRight size={14} />
          <Link to="/rooms" className="hover:text-brand-500 transition-colors">Rooms</Link>
          <FiChevronRight size={14} />
          <span className="text-gray-800 font-medium truncate">{room_title}</span>
        </nav>

        <div className="lg:flex lg:gap-10">
          <div className="lg:w-1/2 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <img
                className="w-full h-72 lg:h-[28rem] object-cover"
                src={room_images[imgIndex]}
                alt={room_title}
              />
              {room_images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <FiRight size={20} />
                  </button>
                </>
              )}
              <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {imgIndex + 1} / {room_images.length}
              </div>
            </div>

            {room_images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {room_images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIndex(idx)}
                    className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                      idx === imgIndex ? 'border-brand-500' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 space-y-5">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 font-jakarta">{room_title}</h1>
              <p className="mt-3 text-gray-600 leading-relaxed">{room_description}</p>
            </div>

            <div className="bg-brand-50 rounded-xl p-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-brand-600">${price_per_night}</span>
              <span className="text-gray-500 text-sm">/ night</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-0.5">Room Size</p>
                <p className="font-semibold text-gray-800">{room_size} sq m</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-0.5">Availability</p>
                <p className="font-semibold text-green-600">{availability} rooms left</p>
              </div>
            </div>

            {special_offers?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Special Offers</h3>
                <div className="flex flex-wrap gap-2">
                  {special_offers.map((offr, idx) => (
                    <Badge key={idx} color="amber">{offr.offer} — {offr.value}% off</Badge>
                  ))}
                </div>
              </div>
            )}

            {features?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {features.map((feat, idx) => (
                    <Badge key={idx} color="blue">{feat}</Badge>
                  ))}
                </div>
              </div>
            )}

            {facilities?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Facilities</h3>
                <div className="flex flex-wrap gap-2">
                  {facilities.map((faci, idx) => {
                    const Icon = getFacilityIcon(faci);
                    return (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {Icon && <Icon size={14} />}
                        {faci}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2 sticky bottom-4 lg:static bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-0 lg:bg-transparent lg:backdrop-blur-none shadow-lg lg:shadow-none">
              <Button onClick={() => setShowModal(true)} variant="outline" size="lg">
                View Reviews
              </Button>
              <Button onClick={() => setShowBookModal(true)} size="lg">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showModal && <ReviewModal id={_id} setShowModal={setShowModal} />}
      {showBookModal && (
        <BookModal
          roomId={_id}
          roomTitle={room_title}
          fare={price_per_night}
          special_offers={special_offers || []}
          setShowBookModal={setShowBookModal}
        />
      )}
    </div>
  );
};

export default SingleRoom;
