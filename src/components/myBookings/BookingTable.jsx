import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BookingRow from "./BookingRow";
import { Rating } from "@mui/material";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const BookingTable = () => {
    const { user } = useContext(AuthContext);
    const [myRating, setMyRating] = useState(0);
    const [myBookings, setMyBookings] = useState([]);
    const [reviewInfo, setReviewInfo] = useState({});

    useEffect(() => {
        axios.get(`https://server-seven-gamma-70.vercel.app/bookings?email=${user.email}`)
            .then(res => {
                setMyBookings(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);


    const reviewSubmit = e => {
        // e.preventDefault();
        const form = new FormData(e.target);
        const review = form.get('review');
        const roomImg = reviewInfo.img;
        const roomTitle = reviewInfo.title;
        const roomId = reviewInfo.room_id;

        // console.log(review, ' and ', myRating);
        setMyRating(0);
        e.target.reset();

        if (!review || !myRating) {
            return;
        }

        axios.post('https://server-seven-gamma-70.vercel.app/reviews', { roomId, roomImg, roomTitle, review, rating: myRating, client: user.displayName, clientPhoto: user.photoURL, clientEmail: user.email })
            .then(res => {
                console.log(res);
                axios.patch(`https://server-seven-gamma-70.vercel.app/rooms/review`, { roomId })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Review Posted Successfully!!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Error Occured!!",
                    footer: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })


    }

    const handleReviewInfo = (title, img, id) => {
        setReviewInfo({
            title,
            img,
            room_id: id
        });
    }

    const reviewModal = (
        <>
            <dialog id="my_modal_2" className="modal backdrop-blur-sm">
                <div className="modal-box space-y-2">
                    <h3 className="font-bold text-lg">Submit Your Review here for</h3>
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={reviewInfo.img} alt="title Image" />
                        <div>
                            <h2 className="font-semibold text-gray-800">{reviewInfo.title}</h2>
                            {/* <p className="text-sm font-normal text-gray-600 -400">{(bookedRoom?.room_description.slice(0, 20) + "....")}</p> */}
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className="absolute p-1 z-[1000] ml-auto border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none top-5 right-4 cursor-pointer"
                        >
                            <input className="text-black h-6 w-6 opacity-50 text-2xl block outline-none focus:outline-none cursor-pointer" value={'×'} type="submit" />
                        </form>
                        <form onSubmit={reviewSubmit} method="dialog" className="w-full flex flex-col justify-center items-center space-y-3">
                            <div className="w-full flex justify-evenly items-center">
                                <h2 className="font-source ">Rate your experience</h2>
                                <Rating name="half-rating-read" onChange={(e) => setMyRating(e.target.value)} value={myRating} precision={0.5} required />
                            </div>
                            <textarea placeholder="post your experience here" className="textarea textarea-bordered textarea-lg p-2 text-sm w-full" name="review" required></textarea>
                            <input className="btn btn-primary w-full" value={"Post"} type="submit" />
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );

    // console.log(myBookings);

    return (
        <div className='my-3'>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 ">Your Activity</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full -400">{myBookings.length} Bookings</span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 -400">
                                                <div className="flex items-center gap-x-3">
                                                    <span>Booked Room</span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Selected Packages</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Booked At</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">Check In</th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">Check Out</th>

                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Applied Offer</span>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">Paid Fare</th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                        {
                                            myBookings && myBookings.map(booking => (<tr key={booking._id}><BookingRow booking={booking} handleReviewInfo={handleReviewInfo} reviewModal={reviewModal} /></tr>))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookingTable;