import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const CONTACTS = [
  { icon: FiMail, title: 'Email', sub: 'Our friendly team is here to help.', value: 'instructors@tripflip.com' },
  { icon: FiMapPin, title: 'Head Office', sub: 'Come say hello at our office HQ.', value: '12/A, Shahjalal Upashahar, Sylhet' },
  { icon: FiPhone, title: 'Phone', sub: 'Mon-Fri from 8am to 5pm.', value: '+880 1903-219313' },
];

const GetInTouch = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTACTS.map((c) => (
          <div key={c.title} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-brand-400 hover:shadow-md transition-all">
            <div className="w-12 h-12 mx-auto mb-4 bg-brand-50 rounded-full flex items-center justify-center text-brand-500">
              <c.icon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{c.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{c.sub}</p>
            <p className="text-sm font-medium text-brand-500">{c.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
