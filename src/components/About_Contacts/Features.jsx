import { motion } from 'framer-motion';
import { FiDroplet, FiStar, FiUsers } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const FEATURES = [
  {
    icon: FiDroplet,
    title: 'Elegant Spa Retreat',
    desc: 'Immerse yourself in a world of serenity and luxury at our elegant spa, offering a diverse range of indulgent treatments and holistic therapies.',
  },
  {
    icon: FiStar,
    title: 'Gourmet Dining',
    desc: 'Indulge in a culinary journey of exquisite flavors and culinary artistry, where every dish is meticulously crafted by world-renowned chefs.',
  },
  {
    icon: FiUsers,
    title: 'Exclusive Concierge',
    desc: 'Elevate your stay with our exclusive concierge services, providing personalized assistance and bespoke experiences tailored to your preferences.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section>
      <SectionHeading
        title="Luxurious Amenities"
        subtitle="Discover Our World-Class Amenities: from rejuvenating spa treatments to state-of-the-art fitness centers."
        className="mb-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {FEATURES.map((feat) => (
          <motion.div
            key={feat.title}
            variants={item}
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-400 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-colors mb-4">
              <feat.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 font-jakarta">{feat.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
