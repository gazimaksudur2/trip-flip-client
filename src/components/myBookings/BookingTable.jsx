import { GoCodeReview } from "react-icons/go";

const BookingTable = () => {
    const title_img = 'https://media.istockphoto.com/id/1072409526/photo/interior-of-a-hotel-bedroom.jpg?s=612x612&w=0&k=20&c=F_5p4-HHbJXEOxjwv4XZc3BWU4zekOxrx6Cb-qBGa4s=';
    const room_title = 'Deluxe Room with Ocean View';
    const room_description = "this is a demo room description for my test case generation.";
    const room_category = 'premium';
    const room_package = '2rooms, 2days';
    const fare = 320;
    const bookedDate = '20-05-2024';
    const checkInDate = '20-05-2024';

    const reviewSubmit = e => {
        // e.preventDefault();
        const review = e.target.form.review.value;
        console.log(review);
        e.target.form.reset();
    }

    const reviewModal = (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box space-y-2">
                    <h3 className="font-bold text-lg">Submit Your Review here for</h3>
                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={title_img} alt="title Image" />
                        <div>
                            <h2 className="font-semibold text-gray-800">{room_title}</h2>
                            <p className="text-sm font-normal text-gray-600 -400">{(room_description.slice(0, 20) + "....")}</p>
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
        <div className='my-3'>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 ">Your Activity</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full -400">4 Bookings</span>
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
                                            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Category</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>Booked At</span>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">Check In Date</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 -400">Paid Fare</th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={title_img} alt="title Image" />
                                                        <div>
                                                            <h2 className="font-semibold text-gray-800">{room_title}</h2>
                                                            <p className="text-sm font-normal text-gray-600 -400">{(room_description.slice(0, 20) + "....")}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-amber-100/60">
                                                    <h2 className="text-sm font-normal text-amber-500">{room_package}</h2>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                                    <h2 className="text-sm font-normal text-emerald-500">{room_category}</h2>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{bookedDate}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 -300 whitespace-nowrap">{checkInDate}</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-2">
                                                    <p className="px-3 py-1 text-xs text-pink-500 rounded-full bg-pink-100/60">${fare}</p>
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
                                        </tr>
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