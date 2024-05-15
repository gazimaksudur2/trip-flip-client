import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookModal = ({ setShowBookModal, special_offers, fare, roomId }) => {
    const { user } = useContext(AuthContext);
    const [off, setOff] = useState(0.0);
    const [childFare, setChildFare] = useState(0.0);
    const [adultFare, setAdultFare] = useState(0.0);
    const [grandTotal, setGrandTotal] = useState(0.0);
    const [discountedTotal, setDiscountedTotal] = useState(0.0);
    const [room, setRoom] = useState(0.0);
    const [person, setPerson] = useState(0.0);
    const [child, setChild] = useState(0.0);
    const [checkin, setCheckIn] = useState(null);
    const [checkout, setCheckOut] = useState(null);
    const [plan, setPlan] = useState({});

    const handleUpForm = (e) => {
        // e.preventDefault();
        const property = e.target.name;
        const value = e.target.value;
        const myPlan = {...plan};

        if (property === 'checkin') {
            setCheckIn(value);
        } else if (property === 'checkout') {
            setCheckOut(value);
        } else if (property === 'room') {
            myPlan.room = value;
            setRoom(parseFloat(value.slice(0, 1)));
            setPerson(parseFloat(value.slice(8, 9)));
        } else if (property === 'children') {
            myPlan.children = value;
            setChild((value === 'None') ? 0.0 : value.slice(0, 1));
        }

        setPlan(myPlan);
    }

    useEffect(() => {
        setChildFare(child * fare * 0.4);
        setAdultFare(person & 1 ? ((room - 1) * fare + (fare * 0.8)) : (room * fare));
    }, [room, fare, child, person]);

    useEffect(() => {
        setDiscountedTotal((childFare + adultFare) * off * 0.01);
        const myPlan = {...plan};
        myPlan.offer = off;
        setPlan(myPlan);
    }, [childFare, adultFare, off, plan]);

    useEffect(() => {
        setGrandTotal((childFare + adultFare) - discountedTotal);
    }, [discountedTotal, childFare, adultFare]);

    const handleSubmit = e => {
        e.preventDefault();
        const cardNo = e.target.card.value;
        const phoneNo = e.target.phone.value;
        const code = e.target.code.value;
        const bookedAt = new Date().toISOString();
        setShowBookModal(false);
        console.log('form submitted!!!',checkin, checkout,  cardNo, phoneNo, code, plan);

        axios.post('http://localhost:5000/bookings',{bookedAt, checkin, checkout, plan, roomId, grandTotal, phoneNo, cardNo, code, client: user.displayName, clientPhoto: user.photoURL, clientEmail: user.email})
            .then(res=>{
                console.log(res);
            })
            .catch(error=>{
                console.log(error.message);
            })
    }

    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur-sm outline-none focus:outline-none"
            >
                <div className="relative min-h-full w-[90%] flex flex-col justify-center my-6 mx-auto max-w-3xl shadow-lg">
                    {/*content*/}
                    <div className="border-0 rounded-lg h-[85vh] relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                                <form onChange={handleUpForm}>
                                    <div className="flex justify-center gap-6">
                                        <div className="pt-3 w-full">
                                            <label className="block text-sm text-gray-500">Check In Date</label>

                                            <input type="date" className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40-300" name="checkin" />
                                        </div>
                                        <div className="pt-3 w-full">
                                            <label className="block text-sm text-gray-500">Check Out Date</label>

                                            <input type="date" className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40-300" name="checkout" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-6">
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="label-text">Travelers Choice</span>
                                            </div>
                                            <select className="select select-bordered" name="room">
                                                <option disabled selected value={null}>Pick one</option>
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
                                                <option disabled selected>Pick one</option>
                                                <option>None</option>
                                                <option>1 child</option>
                                                <option>2 children</option>
                                                <option>3 children</option>
                                                <option>4 children</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="w-full pt-3 flex flex-col justify-between items-start">
                                        <h3 className="font-semibold text-gray-600 text-lg">Choose Any Special Offer<span className="text-xs text-gray-600">(Only one at a time)</span></h3>
                                        <ul className="px-1 pt-2 flex flex-col justify-center items-start">
                                            {
                                                special_offers.map((offr, idx) => <li key={idx}>
                                                    <div className="flex flex-row-reverse justify-center items-center gap-2">
                                                        <span className="label-text">{offr.offer} {offr.value}% off</span>
                                                        <input onClick={() => setOff(offr.value)} type="radio" name="radio-7" className="radio radio-info scale-75" />
                                                    </div>
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                </form>

                                <div className="pt-5 flex flex-col space-y-1">
                                    <h2
                                        className="font-jakarta pb-5 text-center lg:text-start text-2xl font-semibold border-b-2 border-dashed border-gray-300">
                                        Confirm & Pay for Your Booking
                                    </h2>
                                    <div className="pt-4 flex flex-col justify-center lg:justify-between items-center gap-4">
                                        <div className="flex justify-evenly items-center w-full">
                                            <h3 className="font-semibold">Total Selected Room <span className="bg-green-500 ml-2 text-white p-1 rounded-full">{room}</span></h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-700 font-medium">Each Room for Per Night Fare : <span className="text-green-500 font-bold text-2xl">${fare}</span></p>
                                                <p className="text-xs text-red-500">*if one traveler is unpaired he/she will grab 20% discount for that single room</p>
                                                <p className="text-xs text-red-500">*and for each children he have to pay 30% of the actual fare</p>
                                            </div>
                                        </div>

                                        <div className="w-full flex justify-center items-center gap-4">
                                            <div
                                                className="w-full p-4 font-inter text-lg border-2 border-orange-800 bg-orange-300 rounded-lg font-medium flex justify-between">
                                                <p>Adult Fare</p>
                                                <h2>USD <span className="text-xl">{(person & 1 ? ((room - 1) * fare + (fare * 0.8)) : (room * fare))}</span> <span className={(person & 1) ? 'text-sm text-red-700 line-through' : 'hidden'}>{room * fare}</span> <span className="text-sm"> only</span></h2>
                                            </div>

                                            <div
                                                className="w-full p-4 font-inter text-lg border-2 border-blue-800 bg-blue-300 rounded-lg font-medium flex justify-between">
                                                <p>Child Fare</p>
                                                <h2>USD <span className="text-xl">{child * fare * 0.4}</span> <span className={child == 0 ? "hidden" : "text-sm text-red-700 line-through"}>{child * fare}</span> <span className="text-sm"> only</span></h2>
                                            </div>
                                        </div>
                                        <div className={(discountedTotal > 0) ? "w-full p-4 border-2 box-border rounded-md bg-amber-300 flex justify-between" : "hidden"}>
                                            <h3 className="font-inter text-lg font-medium">
                                                Special offer Achieved
                                            </h3>
                                            <h2>USD <span id="discount" className="font-bold text-3xl"> {discountedTotal} </span><span className="text-2xl text-red-800">
                                                OFF</span></h2>
                                        </div>
                                        <div
                                            className="w-full p-4 font-inter text-lg border-2 border-green-800 bg-green-300 rounded-lg font-medium flex justify-between">
                                            <p>Grand Total</p>
                                            <h2>USD <span id="grand-total" className="text-xl">{grandTotal}</span><span className="text-sm"> only</span></h2>
                                        </div>
                                        <form onSubmit={handleSubmit} className="w-full mt-4 mb-5 text-[#030712] font-inter text-lg font-semibold space-y-5">
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
                    {/* <div className="bg-white flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowBookModal(false)}
                        >
                            Close
                        </button>
                    </div> */}
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );
};

export default BookModal;

// discountedTotal = (((parseFloat((((person & 1 ? ((room - 1) * fare + (fare * 0.8)) : (room * fare))+((child * fare * 0.4)))) * off) * 0.01)
// grand_total = total-(parseFloat((((person & 1 ? ((room - 1) * fare + (fare * 0.8)) : (room * fare))+((child * fare * 0.4)))) * off) * 0.01)

// react state timing is not properly matching