import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import FeedBack from './FeedBack/FeedBack';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img className="w-7 h-7" src="https://cdn-icons-png.flaticon.com/128/3168/3168684.png" alt="TripFlip logo" />
              <span className="text-white font-jakarta font-semibold text-xl">TripFlip</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Find and book your perfect hotel room. A seamless travel experience from search to stay.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/rooms', label: 'Rooms' },
                { to: '/contacts', label: 'Contacts' },
                { to: '/about', label: 'About' },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex items-center gap-3 mb-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="GitHub">
                <FaGithub size={14} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors" aria-label="Facebook">
                <FaFacebookF size={14} />
              </a>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <VscFeedback size={16} />
              Send Feedback
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} TripFlip. All rights reserved.</p>
          <p className="text-xs text-gray-500">Built as a portfolio project</p>
        </div>
      </div>

      {showModal && <FeedBack setShowModal={setShowModal} />}
    </footer>
  );
};

export default Footer;
