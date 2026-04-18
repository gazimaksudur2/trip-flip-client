import { AnimatePresence, motion } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors">
      <button
        type="button"
        className="flex items-center justify-between w-full px-5 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-gray-800">{faq.question}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-gray-200 text-gray-600' : 'bg-brand-500 text-white'}`}>
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
