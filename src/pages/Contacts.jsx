import { ScrollRestoration } from 'react-router-dom';
import Faqs from '../components/contacts_comps/Faqs';
import GetInTouch from '../components/contacts_comps/GetInTouch';
import SectionHeading from '../components/ui/SectionHeading';

const Contacts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <ScrollRestoration />
      <SectionHeading
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Reach out through any of the channels below."
        className="mb-12"
      />
      <GetInTouch />
      <Faqs />
    </div>
  );
};

export default Contacts;
