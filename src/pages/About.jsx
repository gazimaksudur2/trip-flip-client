import { ScrollRestoration } from 'react-router-dom';
import Features from '../components/About_Contacts/Features';
import Teams from '../components/About_Contacts/Teams';

const About = () => {
    return (
        <div className='w-[90%] mx-auto flex flex-col justify-between'>
            <ScrollRestoration/>
            <Teams/>
            <Features/>
        </div>
    );
};

export default About;