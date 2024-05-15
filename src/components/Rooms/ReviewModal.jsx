import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ReviewModal = ({ setShowModal, id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        axios.get(`https://server-seven-gamma-70.vercel.app/reviews/${id}`)
        .then(res => {
            setReviews(res.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    },[]);

    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
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
                            <div className="h-[30vh] overflow-scroll space-y-4">
                                {
                                    (!(reviews) || (reviews.length == 0)) && <h1 className="font-semibold text-xl text-center text-red-500">No Review Posted For this room till Now!!</h1>
                                }
                                {
                                    reviews && reviews.map(review => (<>
                                        <div key={review._id} className="py-4 px-4 border-b-2 border-gray-300 flex flex-col justify-between items-center gap-4 shadow">
                                            <div className="flex flex-row items-center justify-start gap-8">
                                                <img className="object-cover rounded-full w-14 h-14" src={review.clientPhoto} alt="" />
                                                <div className="text-center flex flex-col justify-center items-start">
                                                    <Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly />
                                                    <h1 className="font-semibold text-gray-800 ">{review.client}</h1>
                                                    <span className="text-sm text-gray-500">{review?.clientEmail ? review.clientEmail : "Email didn't Provided!!"}</span>
                                                </div>
                                            </div>
                                            <p className="flex items-center justify-center text-center text-gray-500 lg:mx-14">
                                                {review.review}
                                            </p>
                                            {/* <p className="flex items-center justify-center text-center text-gray-500 lg:mx-14">
                                                {review.roomId +"  "+id}
                                            </p> */}
                                        </div>
                                    </>))
                                }
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
        </div>
    );
};

export default ReviewModal;