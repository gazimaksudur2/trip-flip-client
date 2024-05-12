const VisitStores = () => {
    return (
        <div>
            <section className="bg-white">
                <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                    <div>
                        <p className="font-medium text-blue-500">Our locations</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Visit our stores</h1>

                        <p className="mt-3 text-gray-500">Find us at these locations.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
                        <div>
                            <h2 className="font-medium text-gray-800 ">Melbourne</h2>
                            <p className="mt-2 text-gray-500">100 Flinders Street Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 className="font-medium text-gray-800 ">London</h2>
                            <p className="mt-2 text-gray-500">100 Oxford Street London W1D 1LL UK</p>
                        </div>

                        <div>
                            <h2 className="font-medium text-gray-800 ">Sydney</h2>
                            <p className="mt-2 text-gray-500">100 Flinders Street Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 className="font-medium text-gray-800 ">San Francisco</h2>
                            <p className="mt-2 text-gray-500">100 Flinders Street Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 className="font-medium text-gray-800 ">Byron Bay</h2>
                            <p className="mt-2 text-gray-500">100 Flinders Street Melbourne VIC 3000 AU</p>
                        </div>

                        <div>
                            <h2 className="font-medium text-gray-700 -200">Sweden</h2>
                            <p className="mt-2 text-gray-500">100 Flinders Street Melbourne VIC 3000 AU</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisitStores;