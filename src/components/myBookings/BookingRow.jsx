import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GoCodeReview } from 'react-icons/go';
import UpdateButton from './UpdateButton';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const BookingRow = ({ booking, reviewModal, handleReviewInfo }) => {
    const { user } = useContext(AuthContext);
    const [bookedRoom, setBookedRoom] = useState(null);
    const [roomInfo, setRoomInfo] = useState({});
    const [curRoomId, setCurRoomId] = useState();
    // const [updateBookModal, setUpdateBookModal] = useState(false);
    const { bookedAt, checkin, checkout, plan, roomId } = booking;

    // , grandTotal, phoneNo, cardNo, code, client, clientPhoto, clientEmail

    // const handleReviewInfo = (id) => {
    //     axios.get(`https://server-seven-gamma-70.vercel.app/rooms/${id}`)
    //         .then(res => {
    //             setReviewInfo(res.data);
    //             console.log(res.data);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    //     // console.log(reviewInfo);
    //     console.log(reviewInfo);
    // }

    // console.log(curRoomId);

    useEffect(()=>{
        curRoomId && axios.get(`https://server-seven-gamma-70.vercel.app/rooms/${curRoomId}`)
            .then(res => {
                // console.log(res.data);
                setRoomInfo(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    },[curRoomId]);

    // const changeRoomInfo = (id) =>{
    //     // console.log(" room id ", id , " at ", new Date().toLocaleTimeString());
    //     axios.get(`https://server-seven-gamma-70.vercel.app/rooms/${id}`)
    //         .then(res => {
    //             console.log(res.data);
    //             setRoomInfo(res.data);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }

    useEffect(() => {
        // console.log(user.email);
        axios.get(`https://server-seven-gamma-70.vercel.app/rooms/${roomId}?email=${user.email}`)
            .then(res => {
                setBookedRoom(res.data);
                // console.log(res.data);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, []);

    const handleCancel = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete this booking!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://server-seven-gamma-70.vercel.app/bookings/${booking._id}`)
                    .then(res => {
                        console.log(res);
                        swalWithBootstrapButtons.fire({
                            title: "Cancelled!!",
                            text: "Your booking has been Cancelled!!",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error.message);
                        swalWithBootstrapButtons.fire({
                            title: "Error Occured!!",
                            text: error.message,
                            icon: "error"
                        });
                    })
                    
                
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Okay",
                    text: "Your Booking is safe Now!!",
                    icon: "error"
                });
            }
        });
    }

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
                    <h2 className="text-sm font-normal text-amber-500">{plan?.room}</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{bookedAt}</td>
            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{checkin}</td>
            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{checkout}</td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                    <h2 className="text-sm font-normal text-emerald-500">{plan?.offer}%</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">${bookedRoom && bookedRoom?.price_per_night}</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center justify-center gap-x-6">
                    <button className="text-gray-500 transition-colors duration-200 -300 hover:text-green-500 focus:outline-none" onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <GoCodeReview onClick={() => handleReviewInfo(bookedRoom?.room_title, bookedRoom?.homeImg, bookedRoom?._id)} className="text-lg" size={20} />
                    </button>
                    {
                        reviewModal
                    }

                    <button onClick={handleCancel} className="text-gray-500 transition-colors duration-200 -300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    <UpdateButton setCurRoomId={setCurRoomId} roomInfo={roomInfo} booking={booking} />
                </div>
            </td>
        </>
    );
};

export default BookingRow;