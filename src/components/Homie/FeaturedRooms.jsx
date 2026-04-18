import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FeatureRoomCard from "./FeatureRoomCard";
import SectionHeading from "../ui/SectionHeading";
import Spinner from "../ui/Spinner";
import { useRoomsQuery } from "../../hooks/useRoomQueries";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedRooms = () => {
  const { data: rooms = [], isLoading, isError } = useRoomsQuery('all');
  const featured = rooms.slice(0, 4);

  return (
    <section className="py-12 lg:py-16">
      <SectionHeading
        title="Featured Room Collection"
        subtitle="Indulge in opulent accommodations designed for discerning travelers seeking the ultimate in comfort and sophistication."
        className="mb-10 px-4"
      />

      {isLoading && (
        <div className="flex justify-center py-16">
          <Spinner size="lg" />
        </div>
      )}
      {isError && (
        <p className="text-center text-error font-medium">Could not load featured rooms. Please try again later.</p>
      )}

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {!isLoading && !isError && featured.map((room) => (
          <motion.div key={room._id} variants={item}>
            <Link to={`/singleroom/${room._id}`} className="block group">
              <FeatureRoomCard
                content={{
                  id: room._id,
                  url: room.card_img,
                  title: room.room_title,
                  price: room.price_per_night,
                  description: room.room_description
                    ? room.room_description.slice(0, 120) + (room.room_description.length > 120 ? '...' : '')
                    : '',
                }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedRooms;
