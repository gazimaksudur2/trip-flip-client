import { useState } from 'react';
import { Map, Marker } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers';
import { FiMapPin } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';

const LOCATIONS = [
  { name: 'Frankfurt, Germany', coords: [50.1109, 8.6821] },
  { name: 'Shenzhen, China', coords: [22.5431, 114.0579] },
  { name: 'Tokyo, Japan', coords: [35.6762, 139.6503] },
  { name: 'Houston, USA', coords: [29.7604, -95.3698] },
  { name: 'Seoul, South Korea', coords: [37.5665, 126.9780] },
  { name: 'Mumbai, India', coords: [19.0760, 72.8777] },
];

const HotelLocations = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 lg:py-16">
      <SectionHeading
        title="Explore Our Branch Locations"
        subtitle="Embark on a journey with our hotel branch locations, where luxury meets adventure and every stay is a story to cherish."
        className="mb-8 px-4"
      />

      <div className="max-w-3xl mx-auto px-4 space-y-3">
        {LOCATIONS.map((loc, idx) => (
          <div key={loc.name} className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="flex items-center gap-2.5 font-medium text-gray-800 font-radio">
                <FiMapPin className="text-brand-500" size={18} />
                {loc.name}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="px-3 pb-3">
                <div className="rounded-lg overflow-hidden">
                  <Map provider={osm} height={280} defaultCenter={loc.coords} defaultZoom={11}>
                    <Marker width={50} anchor={loc.coords} />
                  </Map>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelLocations;
