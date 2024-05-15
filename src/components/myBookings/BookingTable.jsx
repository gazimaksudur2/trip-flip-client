import axios from "axios";
import { useEffect, useState } from "react";
import BookingRow from "./BookingRow";

const BookingTable = () => {
    const [mybookings, setMyBookings] = useState([]);
    // const title_img = 'https://media.istockphoto.com/id/1072409526/photo/interior-of-a-hotel-bedroom.jpg?s=612x612&w=0&k=20&c=F_5p4-HHbJXEOxjwv4XZc3BWU4zekOxrx6Cb-qBGa4s=';
    // const room_title = 'Deluxe Room with Ocean View';
    // const room_description = "this is a demo room description for my test case generation.";
    // const room_category = 'premium';
    // const room_package = '2rooms, 2days';
    // const fare = 320;
    // const bookedDate = '20-05-2024';
    // const checkInDate = '20-05-2024';

    useEffect(()=>{
        axios.get('http://localhost:5000/bookings')
            .then(res=>{
                setMyBookings(res.data);
            })
            .catch(error=>{
                console.log(error.message);
            })
    },[]);

    // console.log(mybookings);

    return (
        <div className='my-3'>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 ">Your Activity</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full -400">{mybookings.length} Bookings</span>
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
                                            mybookings && mybookings.map(booking=>(<tr key={booking._id}><BookingRow booking={booking}/></tr>))
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