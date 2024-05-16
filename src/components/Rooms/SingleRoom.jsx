import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReviewModal from "./ReviewModal";
import BookModal from "./BookModal";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const SingleRoom = () => {
    const { user } = useContext(AuthContext);
    const locate = useLocation();
    const [showModal, setShowModal] = React.useState(false);
    const [showBookModal, setShowBookModal] = React.useState(false);
    const [roomData, setRoomData] = useState({});

    const [room_images, setroom_images] = useState([]);

    useEffect(()=>{
        roomData && setroom_images(roomData?.room_images);
        // roomData && setspecial_offers(roomData?.special_offers);
        // roomData && setfeatures(roomData?.features);
        // roomData && setfacilities(roomData?.facilities);
    },[roomData]);

    
    // const room_images = [];
    // const special_offers = [];
    // const features = [];
    // const facilities = [];

    // console.log(locate.pathname.substring(locate.pathname.indexOf('/single')+12));
    useEffect(()=>{
        axios.get(`https://server-seven-gamma-70.vercel.app/rooms/${locate.pathname.substring(locate.pathname.indexOf('/single')+12)}?email=${user.email}`)
            .then(res=>{
                // console.log(res.data);
                setRoomData(res.data);
            })
            .catch(error=>{
                console.log(error.message);
    })
    },[]);

    // , room_images, facilities, special_offers, features 

    const { _id, room_title, room_description, room_size, price_per_night, availability , facilities, special_offers, features } = roomData;

    const [val, setVal] = useState(0);

    useEffect(()=>{
        setVal((parseInt(Math.random() * 10)) % (room_images?.length));
    },[roomData, room_images]);
    

    const handleInc = () => {
        setVal((val + 1) % (room_images.length));
        // console.log(val);
    }

    const handleDec = () => {
        setVal((val - 1) % (room_images.length) < 0 ? (room_images.length - 1) : (val - 1) % (room_images.length));
        // console.log(val);
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
                    <ReviewModal id={_id} setShowModal={setShowModal} />
                </>
            ) : null}
        </>
    );


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
                    <BookModal roomId={_id} fare={price_per_night} special_offers={special_offers} setShowBookModal={setShowBookModal} />
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
                            <img className="object-cover object-center w-full min-h-full rounded-lg" src={room_images && room_images[val]} alt="images" />
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
                                {room_title}
                            </h1>

                            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                                {room_description}
                            </p>

                            <h3 className="pt-3 text-xl font-semibold text-white font-jakarta">Per Night Cost: <span className="text-blue-600 pl-4 text-3xl font-bold"> ${price_per_night} <span className="text-sm text-gray-400 font-normal"> (only)</span></span></h3>
                            <div className="space-y-1">
                                <h4 className="font-medium text-gray-400 font-source">Room Size: {room_size} sq meters</h4>
                                <h4 className="font-semibold text-gray-400 font-source">Availability Status : <span className="text-2xl text-green-400 font-bold"> Available <span className="text-sm text-gray-400 font-normal">(only <span>{availability}</span> rooms are left)</span></span></h4>
                                <div className="w-full grid grid-cols-2 gap-5">
                                    <div>
                                        <h3 className="font-semibold text-gray-200 font-source">Special Offers: </h3>
                                        <ul className="list-disc px-4">
                                            {
                                                special_offers?.map((offr, idx) => <li className="text-gray-400" key={idx}>{offr.offer} {offr.value}% off</li>)
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-200 font-source">Awesome features: </h3>
                                        <ul className="list-disc px-4">
                                            {
                                                features?.map((feature, idx) => <li className="text-gray-400" key={idx}>{feature}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-200 font-source">Extra Facilities : </h3>
                                        <ul className="list-disc px-4 gird grid-cols-2 gap-3">
                                            {
                                                facilities?.map((faci, idx) => <li className="text-gray-400" key={idx}>{faci}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
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
