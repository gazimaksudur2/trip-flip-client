import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';

const TEAM = [
  {
    name: 'Arthur Melo',
    role: 'Chief Director',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Amelia Anderson',
    role: 'General Manager',
    img: 'https://images.unsplash.com/photo-1531590878845-12627191e687?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Olivia Wathan',
    role: 'Guest Relations',
    img: 'https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'John Doe',
    role: 'Front Desk Lead',
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=400&q=80',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Teams = () => {
  return (
    <section className="mb-16">
      <SectionHeading
        title="Our Executive Team"
        subtitle="Discover the epitome of hospitality with our elite team. From tailored experiences to seamless service, we exceed expectations."
        className="mb-10"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {TEAM.map((member) => (
          <motion.div
            key={member.name}
            variants={item}
            className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-brand-500 hover:shadow-lg transition-all duration-300"
          >
            <img
              className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-gray-200 group-hover:ring-brand-300 transition-all"
              src={member.img}
              alt={member.name}
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800 font-jakarta">{member.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            <div className="flex justify-center gap-3 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-500 hover:text-white transition-colors">
                <FaLinkedinIn size={12} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-white transition-colors">
                <FaGithub size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Teams;
