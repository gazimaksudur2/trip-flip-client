import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import BookModal from "./BookModal";

const SingleRoom = () => {
    const [roomData, setRoomData] = useState({});
    const locate = useLocation();
    console.log(locate.pathname, "  ", locate.pathname.substring(locate.pathname.indexOf('/:')+2));

    useEffect(()=>{
        axios.get(`http://localhost:5173/rooms/:${locate.pathname.substring(locate.pathname.indexOf('/:')+2)}`,{ withCredentials: true })
            .then(res=>{
                setRoomData(res);
            })
            .catch(error=>{
                console.log(error.message);
            })
    },[]);
    console.log(roomData);
    
    const { room_title, room_description, room_size, price_per_night, availability, homeImg, facilities, review_count, special_offers, features, card_img} = roomData || {};

    const room_images = [];
    const [showModal, setShowModal] = React.useState(false);
    const [showBookModal, setShowBookModal] = React.useState(false);

    const [val, setVal] = useState((parseInt(Math.random() * 10)) % (room_images.length));

    const handleInc = () => {
        setVal((val + 1) % (room_images.length));
    }

    const handleDec = () => {
        setVal((val - 1) % (room_images.length) < 0 ? (room_images.length - 1) : (val - 1) % (room_images.length));
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
                    <ReviewModal setShowModal={setShowBookModal}/>
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
                    <BookModal setShowBookModal={setShowBookModal} handleSubmit={handleSubmit}/>
                </>
            ) : null}
        </>
    )
    // console.log(val, room_images.length);
    return (
        <div className="">
            <section className="min-h-screen bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <div className="relative lg:w-1/2 lg:mx-6 w-full h-96 lg:h-[36rem]">
                            <img className="object-cover object-center w-full min-h-full rounded-lg" src={room_images[val]} alt="images" />
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