const HotelLocations = () => {

    return (
        <>
            <div className='lg:w-[70%] w-[90%] mx-auto mb-3 lg:mb-10 flex flex-col justify-center items-center gap-2'>
                <div className="px-[4%] md:px-[15%] py-4 space-y-3 flex flex-col justify-center items-center text-center">
                    <h2 className='text-3xl font-jakarta font-bold'>Explore Our Branch Locations</h2>
                    <p className='font-source'>Embark on a journey with our hotel branch locations, where luxury meets adventure and every stay is a story to cherish. Experience comfort and our global network wherever you travel.</p>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-radio">
                        Frankfurt, Germany
                    </div>
                    <div className="collapse-content w-full p-3">
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-radio">
                        Shenzhen, China
                    </div>
                    <div className="collapse-content w-full p-3">
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-radio">
                        Tokyo, Japan
                    </div>
                    <div className="collapse-content w-full p-3">
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-radio">
                        Houston, USA
                    </div>
                    <div className="collapse-content w-full p-3">
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-radio">
                        Seoul, South Korea
                    </div>
                    <div className="collapse-content w-full p-3">
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium font-radio">
                        Mumbai, India
                    </div>
                    <div className="collapse-content w-full p-3">
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotelLocations;

// Eiffel Tower, Paris, France
// Machu Picchu, Peru
// Great Wall of China, China
// Taj Mahal, Agra, India
// Statue of Liberty, New York City, USA
// Sydney Opera House, Sydney, Australia