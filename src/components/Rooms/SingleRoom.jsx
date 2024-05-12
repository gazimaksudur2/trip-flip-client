import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingleRoom = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showBookModal, setShowBookModal] = React.useState(false);

    const images = ['https://plus.unsplash.com/premium_photo-1681487492845-1921303e091b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tcyUyMGJhbm5lciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwcm9vbXMlMjBiYW5uZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D'];

    const [val, setVal] = useState((parseInt(Math.random() * 10)) % (images.length));

    const handleInc = () => {
        setVal((val + 1) % (images.length));
    }

    const handleDec = () => {
        setVal((val - 1) % (images.length) < 0 ? (images.length - 1) : (val - 1) % (images.length));
    }

    const reviewModal = (
        <>
            <button
                className="btn btn-primary font-semibold text-lg ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                View Reviews
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[70%] my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Consumer Reviews
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="h-[30vh] overflow-scroll">
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                        <div className="py-2 px-4 border-b-2 border-gray-300">
                                            <h3 className="text-lg font-medium text-blue-500 leading-relaxed">Mia Brown</h3>
                                            <p className="text-gray-600 leading-relaxed">Marketing Manager at Stech</p>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="bg-white flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );

    const handleSubmit = e => {
        e.preventDefault();
        setShowBookModal(false);
        console.log('form submitted!!!');
    }

    const bookModal = (
        <>
            <button
                className="btn btn-secondary font-semibold text-lg ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowBookModal(true)}
            >
                Book Now
            </button>
            {showBookModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-sm outline-none focus:outline-none"
                    >
                        <div className="relative min-h-full w-[90%] flex flex-col justify-center my-6 mx-auto max-w-3xl shadow-lg">
                            {/*content*/}
                            <div className="border-0 rounded-t-lg h-[70vh] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between pt-4 px-4 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="font-semibold">
                                        Book your room at <span className="pl-4 text-3xl text-primary">Seaside Bungalow</span>
                                    </h3>
                                    <button
                                        className="p-1 z-[1000] ml-auto border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowBookModal(false)}
                                    >
                                        <span className="text-black h-6 w-6 opacity-50 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="h-[40vh] relative px-4 pt-2 flex-auto overflow-scroll">
                                    <div className="p-2 overflow-hidden">
                                        <h1 className="text-xl font-semibold font-jakarta">Choose Your Unit</h1>
                                        <div className="flex justify-center gap-6">
                                            <div className="pt-3 w-full">
                                                <label className="block text-sm text-gray-500">Check In Date</label>

                                                <input type="date" className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40-300" />
                                            </div>
                                            <div className="pt-3 w-full">
                                                <label className="block text-sm text-gray-500">Check Out Date</label>

                                                <input type="date" className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40-300" />
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-6">
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span className="label-text">Travelers Choice</span>
                                                </div>
                                                <select className="select select-bordered">
                                                    <option disabled selected>Pick one</option>
                                                    <option>1 room, 2 travelers</option>
                                                    <option>1 room, 1 travelers</option>
                                                    <option>2 room, 2 travelers</option>
                                                    <option>2 room, 3 travelers</option>
                                                    <option>2 room, 4 travelers</option>
                                                </select>
                                            </label>
                                            <label className="form-control w-full">
                                                <div className="label">
                                                    <span className="label-text">Children Seat</span>
                                                </div>
                                                <select className="select select-bordered">
                                                    <option disabled selected>Pick one</option>
                                                    <option>None</option>
                                                    <option>1 child</option>
                                                    <option>2 children</option>
                                                    <option>3 children</option>
                                                    <option>4 children</option>
                                                </select>
                                            </label>
                                        </div>

                                        <div className="pt-5 flex flex-col space-y-1">
                                            <h2
                                                className="font-jakarta pb-5 text-center lg:text-start text-2xl font-semibold border-b-2 border-dashed border-gray-300">
                                                Confirm & Pay for Your Booking
                                            </h2>
                                            <div className="confirm-box py-4 flex flex-col justify-center lg:justify-between items-center gap-4">
                                                <div className="flex justify-start items-center w-full gap-[30%]">
                                                    <h3 className="font-semibold ">Room <span className="bg-green-500 text-white p-1 rounded-full">0</span></h3>
                                                    <p className="text-gray-700 font-medium">Each Room for Per Day Fare : <span className="text-green-500 font-bold text-2xl">$340</span></p>
                                                </div>
                                                <div className="w-full flex flex-col justify-between items-start">
                                                    <h3 className="font-semibold text-gray-600 text-lg">Choose Any Special Offer</h3>
                                                    <div className="form-control px-4 flex flex-col justify-center items-start">
                                                        <label className="label cursor-pointer flex flex-row-reverse justify-center items-center gap-3">
                                                            <span className="label-text">Couple Discount</span>
                                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded"/>
                                                            {/* <input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> */}
                                                        </label>
                                                        <label className="label cursor-pointer flex flex-row-reverse justify-center items-center gap-3">
                                                            <span className="label-text">Freshers Discount</span>
                                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded"/>
                                                            {/* <input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> */}
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="discounted w-full p-4 border-2 box-border rounded-md bg-orange-300 flex justify-between">
                                                    <h3 className="font-inter text-lg font-medium">
                                                        Discount Achieved
                                                    </h3>
                                                    <h2>USD <span id="discount" className="font-bold text-3xl"> 200 </span><span className="text-2xl text-red-800">
                                                        OFF</span></h2>
                                                </div>
                                                <div
                                                    className="grand-total w-full p-4 font-inter text-lg border-2 border-green-800 bg-green-300 rounded-lg font-medium flex justify-between">
                                                    <p className="total-text">Grand Total</p>
                                                    <h2>BDT <span id="grand-total" className="text-xl">340</span><span className="text-sm"> only</span></h2>
                                                </div>
                                                <form onSubmit={handleSubmit} className="w-full my-10 text-[#030712] font-inter text-lg font-semibold space-y-5">
                                                    <label className="form-control w-full">
                                                        <div className="label">
                                                            <span className="label-text">Phone Number*</span>
                                                        </div>
                                                        <input name="phone" type="number" placeholder="Enter Your Phone Number"
                                                            className="input input-bordered w-full" required />
                                                    </label>
                                                    <label className="form-control w-full">
                                                        <div className="label">
                                                            <span className="label-text">Card Number*</span>
                                                        </div>
                                                        <input name="card" type="number" placeholder="Enter Your Card Number"
                                                            className="input input-bordered w-full" required />
                                                    </label>
                                                    <label className="form-control w-full">
                                                        <div className="label">
                                                            <span className="label-text">Security Code*</span>
                                                        </div>
                                                        <input name="code" type="number" placeholder="Enter Your Security Code"
                                                            className="input input-bordered w-full" required />
                                                    </label>
                                                    <input
                                                        className="btn w-full bg-[#1dd100] text-white hover:bg-[#1dd100ac] disabled:bg-[#1dd1003c]" value={'Confirm & Book'} type="submit"/>
                                                    <div className="links w-3/4 mx-auto text-sm font-normal flex justify-between">
                                                        <a href="http://">Terms & Conditions</a>
                                                        <a href="http://">Cancellation Policy</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="bg-white flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowBookModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
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
                        <div className="mt-8 space-y-3 lg:w-1/2 lg:px-6 lg:mt-0">
                            <Link to={'/rooms'}>
                                <button className="btn">Go Back</button>
                            </Link>
                            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Seaside Bungalow
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                                Embrace coastal living in our Seaside Bungalow, nestled along the pristine shores of the ocean. This charming bungalow offers 500 square feet of seaside luxury, featuring a private terrace with panoramic views of the sea, a plush king-size bed, and a cozy sitting area with a fireplace. Listen to the soothing sound of the waves and feel the gentle ocean breeze as you unwind in this idyllic retreat. Whether you are a couple seeking a romantic escape or a family in search of adventure, our Seaside Bungalow offers the perfect coastal getaway.
                            </p>

                            <h3 className="pt-3 text-xl font-semibold text-white font-jakarta">Per Night Cost: <span className="text-blue-600 pl-4 text-3xl font-bold"> $340 <span className="text-sm text-gray-400 font-normal"> (only)</span></span></h3>
                            <div className="space-y-1">
                                <h4 className="font-medium text-gray-400 font-source">Room Size: 130 sq meters</h4>
                                <h4 className="font-semibold text-gray-400 font-source">Availability Status : <span className="text-2xl text-green-400 font-bold"> Available <span className="text-sm text-gray-400 font-normal">(only <span>3</span> rooms are left)</span></span></h4>
                                <h4 className="font-medium text-gray-400 font-source">Special Offers: Discount for couples 20% & for new customers 10%</h4>
                            </div>
                            <div className="flex justify-start items-center gap-6">
                                {
                                    reviewModal
                                }
                                {
                                    bookModal
                                }
                            </div>
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



{/* <div>
<h2 className="my-6 text-xl text-gray-200 font-semibold">Customer Review: </h2>
<h3 className="text-lg font-medium text-blue-500">Mia Brown</h3>
<p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
</div> */}

// modal is not working properly


{/* <img src="images/success.png" alt=""/> */ }