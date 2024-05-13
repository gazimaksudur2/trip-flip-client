const BookModal = ({setShowBookModal, handleSubmit}) => {
    return (
        <div>
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
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                    {/* <input type="checkbox" defaultChecked className="checkbox checkbox-sm" /> */}
                                                </label>
                                                <label className="label cursor-pointer flex flex-row-reverse justify-center items-center gap-3">
                                                    <span className="label-text">Freshers Discount</span>
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
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
                                                className="btn w-full bg-[#1dd100] text-white hover:bg-[#1dd100ac] disabled:bg-[#1dd1003c]" value={'Confirm & Book'} type="submit" />
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
        </div>
    );
};

export default BookModal;