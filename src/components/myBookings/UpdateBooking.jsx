import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const UpdateBooking = ({ booking, roomInfo, setShowUpdateModal }) => {
    const [roomData, setRoomData] = useState(null);

    // const changeRoomInfo = e =>{
    //     axios.get(`https://server-seven-gamma-70.vercel.app/rooms/${booking.roomId}`)
    //         .then(res => {
    //             setRoomInfo(res.data);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }
    // useEffect(() => {

    // }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e.target);
        const checkIn = e.target.checkin.value;
        const checkOut = e.target.checkout.value;
        const updatedAt = new Date().toISOString().slice(0, 10);
        const room = e.target.room.value;
        const children = e.target.children.value;
        // const roomNo = room.slice(0, 1);
        // const travelerNo = room.slice(8, 9);
        const myPlan = {
            room,
            children,
            offer: booking.plan.offer,
        };
        // setPlan({
        //     room,
        //     children,
        //     offer: booking.plan.offer,
        // })
        // console.log('form submitted!!!', checkIn, checkOut, room, plan, room, roomNo, travelerNo);


        // console.log('form submitted!!!',updatedAt, checkIn, checkOut, room, children, myPlan);

        // Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource

        axios.patch(`https://server-seven-gamma-70.vercel.app/bookings/${booking._id}`, { updatedAt, checkIn, checkOut, myPlan })
            .then(res => {
                // console.log(res);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Booking is Updated Now!!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                // console.log(error.message);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Your booking isn't updated!!",
                    footer: error.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            })

        setShowUpdateModal(false)

        e.target.reset();
    }

    useEffect(() => {
        // console.log(roomInfo, new Date().toTimeString());
        setRoomData(roomInfo)
    }, [roomInfo]);

    // console.log(roomInfo);
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-sm outline-none focus:outline-none"
            >
                <div className="relative min-h-full w-[90%] flex flex-col justify-center my-6 mx-auto max-w-3xl shadow-lg">
                    <div className="border-0 rounded-lg py-5 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between pt-4 px-4 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="font-semibold">
                                Update Your Booked Room<br/> <span className="md:pl-4 text-2xl md:text-3xl text-primary">{roomData?.room_title}</span>
                            </h3>
                            <button
                                className="p-1 z-[1000] ml-auto border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowUpdateModal(false)}
                            >
                                <span className="text-black h-6 w-6 opacity-50 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative px-4 pt-2 overflow-scroll">
                            <div className="p-2 overflow-hidden">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex justify-center gap-6">
                                        <div className="pt-3 w-full">
                                            <label className="block text-sm text-gray-500">Check In Date</label>

                                            <input type="date" className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40-300" defaultValue={booking?.checkin} name="checkin" />
                                        </div>
                                        <div className="pt-3 w-full">
                                            <label className="block text-sm text-gray-500">Check Out Date</label>

                                            <input type="date" className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40-300" defaultValue={booking?.checkout} name="checkout" />
                                        </div>
                                    </div>
                                    <div className="pb-5 flex justify-center gap-6">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Travelers Choice</span>
                                            </div>
                                            <select className="select select-bordered" name="room">
                                                <option disabled selected value={null}>{booking?.plan?.room}</option>
                                                <option>1 room, 2 travelers</option>
                                                <option>1 room, 1 travelers</option>
                                                <option>2 room, 3 travelers</option>
                                                <option>2 room, 4 travelers</option>
                                                <option>3 room, 5 travelers</option>
                                            </select>
                                        </label>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Children Seat</span>
                                            </div>
                                            <select className="select select-bordered" name="children">
                                                <option disabled selected>{booking?.plan?.children}</option>
                                                <option>None</option>
                                                <option>1 child</option>
                                                <option>2 children</option>
                                                <option>3 children</option>
                                                <option>4 children</option>
                                            </select>
                                        </label>
                                    </div>
                                    <input className="btn w-full bg-[#1dd100] text-white hover:bg-[#1dd100ac] disabled:bg-[#1dd1003c]" value={'Update Booking'} type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
export default UpdateBooking;


{/* <form method="dialog">
                                    <input type="submit" className=" btn mt-5 w-full bg-red-600 text-white hover:bg-red-300" value={'Exit From Here'} />
                                </form> */}

{/* <div className="bg-white flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setUpdateBookModal(false)}
                        >
                            Close
                        </button>
                    </div> */}