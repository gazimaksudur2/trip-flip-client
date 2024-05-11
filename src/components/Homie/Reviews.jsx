import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(datas => setData(datas));
    }, [])

    // console.log(data);
    return (
        <div>
            <section className="lg:py-12 lg:w-[60%] mx-auto font-ubuntu">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-6 font-jakarta">What People Are Saying</h2>
                    <p className="text-gray-700 font-normal font-source text-center mb-8">Discover why our customers love us! Read real reviews and testimonials from satisfied clients who have experienced our exceptional service and found their dream properties. From first-time visitors to seasoned travelers, our dedication to customer satisfaction shines through in every interaction.</p>
                </div>
            </section>
            <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10'>
                {
                    data && data.map((dat, idx) => (<ReviewCard key={idx} data={dat} />))
                }
            </div>
        </div>
    );
};

export default Reviews;