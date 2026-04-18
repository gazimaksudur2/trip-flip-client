import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { toast } from '../../lib/toast';

const FeedBack = ({ setShowModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jj4ls1f', 'template_zoknedi', form.current, {
        publicKey: 'Rf-wl7heCegLW0Ykq',
      })
      .then(
        () => {
          toast.success('Feedback sent successfully!');
          setShowModal(false);
        },
        () => {
          toast.error('Could not send feedback. Try again.');
        },
      );
  };

  return (
    <Modal open={true} onClose={() => setShowModal(false)} maxWidth="max-w-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Feedback</h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 focus:outline-none resize-none"
              placeholder="Share your thoughts..."
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="ghost" type="button" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button type="submit">Submit Feedback</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FeedBack;
