import { ScrollRestoration } from 'react-router-dom';
import Teams from '../components/About_Contacts/Teams';
import Features from '../components/About_Contacts/Features';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <ScrollRestoration />
      <SectionHeading
        title="About TripFlip"
        subtitle="Meet the team and discover the amenities that make us the top choice for luxury hotel booking."
        className="mb-12"
      />
      <Teams />
      <Features />
    </div>
  );
};

export default About;
