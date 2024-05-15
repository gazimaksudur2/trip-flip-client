import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoCodeReview } from 'react-icons/go';

const BookingRow = ({booking}) => {
    const [bookedRoom, setBookedRoom] = useState(null);
    const { bookedAt, checkin, checkout, plan, roomId, grandTotal, phoneNo, cardNo, code, client, clientPhoto, clientEmail } = booking;

    const reviewSubmit = e => {
        // e.preventDefault();
        const review = e.target.form.review.value;
        console.log(review);
        e.target.form.reset();
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/rooms/${booking.roomId}`)
            .then(res=>{
                setBookedRoom(res.data);
                // console.log(res.data);
            })
            .catch(error=>{
                console.log(error.message);
            })
    },[]);

    const reviewModal = (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box space-y-2">
                    <h3 className="font-bold text-lg">Submit Your Review here for</h3>
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={bookedRoom && bookedRoom?.homeImg} alt="title Image" />
                        <div>
                            <h2 className="font-semibold text-gray-800">{bookedRoom && bookedRoom?.room_title}</h2>
                            {/* <p className="text-sm font-normal text-gray-600 -400">{(bookedRoom?.room_description.slice(0, 20) + "....")}</p> */}
                        </div>
                    </div>
                    <div className="modal-action pt-4">
                        <form method="dialog" className="w-full flex flex-col justify-center items-center space-y-3">
                            <textarea placeholder="post your experience here" className="textarea textarea-bordered textarea-lg w-full" name="review"></textarea>
                            <input onClick={reviewSubmit} className="btn btn-primary w-full" value={"Post"} type="submit" />
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )

    return (
        <>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={bookedRoom && bookedRoom?.homeImg} alt="title Image" />
                        <div>
                            <h2 className="font-semibold text-gray-800">{bookedRoom && bookedRoom?.room_title}</h2>
                            <p className="text-sm font-normal text-gray-600 -400">{(bookedRoom?.room_description.slice(0, 20) + "....")}</p>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-amber-100/60">
                    <h2 className="text-sm font-normal text-amber-500">{plan.room}</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{bookedAt}</td>
            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{checkin}</td>
            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{checkout}</td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                    <h2 className="text-sm font-normal text-emerald-500">{plan.offer}%</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">${bookedRoom && bookedRoom?.price_per_night}</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center justify-center gap-x-6">
                    <button className="text-gray-500 transition-colors duration-200 -300 hover:text-green-500 focus:outline-none" onClick={() => document.getElementById('my_modal_1').showModal()}>
                        <GoCodeReview className="text-lg" size={20} />
                    </button>
                    {
                        reviewModal
                    }

                    <button className="text-gray-500 transition-colors duration-200 -300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>

                    <button className="text-gray-500 transition-colors duration-200 -300 hover:text-yellow-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                </div>
            </td>
        </>
    );
};

export default BookingRow;