import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  'Clean and Simple Layout',
  'Just choose and select your rooms',
  'Easy to Use',
];

const BannerTop = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 py-12 lg:py-20">
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-jakarta"
          >
            Easiest way to find your{' '}
            <span className="text-brand-500">destinations</span>
          </motion.h1>

          <div className="space-y-3">
            {features.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 text-gray-600"
              >
                <FiCheckCircle className="text-brand-500 shrink-0" size={20} />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Link to="/rooms">
              <button className="px-8 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/25">
                Browse Rooms
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <img
            className="w-full h-80 lg:h-[28rem] object-cover rounded-2xl shadow-2xl"
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"
            alt="Luxury hotel resort with pool"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BannerTop;
