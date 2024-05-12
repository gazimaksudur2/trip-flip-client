import { useState } from "react";

const SingleRoom = () => {
    const images = ['https://plus.unsplash.com/premium_photo-1681487492845-1921303e091b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tcyUyMGJhbm5lciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXMlMjBiYW5uZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D'];

    const [val, setVal] = useState((parseInt(Math.random()*10))%(images.length));

    const handleInc = () => {
        setVal((val+1)%(images.length));
    }

    const handleDec = () => {
        setVal((val-1)%(images.length)<0?(images.length-1):(val-1)%(images.length));
    }

    // console.log(val, images.length);
    return (
        <div className="">
            <section className="min-h-screen bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <div className="relative lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem]">
                            <img className="object-cover object-center w-full min-h-full rounded-lg" src={images[val]} alt="images" />
                            <div className="absolute bottom-5 right-5 z-10 flex items-center justify-between mt-12 lg:justify-start">
                                <button onClick={handleDec} title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full bg-gray-900 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button onClick={handleInc} title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full bg-gray-900 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Help us improve our productivity
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a. ”
                            </p>

                            <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleRoom;

// awesome image 
// "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"