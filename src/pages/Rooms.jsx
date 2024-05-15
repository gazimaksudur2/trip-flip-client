import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import RoomHeader from "../components/Rooms/RoomHeader";
import { ScrollRestoration } from "react-router-dom";
import RoomCard from "../components/Rooms/RoomCard";
import { MdFilterList } from "react-icons/md";

const Rooms = () => {
    const { user } = useContext(AuthContext);
    const [url, setURL] = useState('https://server-seven-gamma-70.vercel.app/rooms');
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // axios.get(`https://server-seven-gamma-70.vercel.app/rooms?email=${user?.email}&&name=${user?.displayName}`, { withCredentials: true })
        axios.get(url)
            .then(res => {
                setRooms(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user, url]);

    const handleFilter = e => {
        // console.log(e.target.value, e.target.name);
        const limit = e.target.value;
        let URL = 'https://server-seven-gamma-70.vercel.app/rooms';

        // console.log(limit.slice(limit.length-4,limit.length));
        if (limit === 'all') {
            // console.log('show all');
        } else if (limit.slice(limit.length - 4, limit.length) === 'more') {
            const middle = limit.indexOf(' to');
            const startPoint = limit.slice(0, (middle));
            URL = URL + `?start=${startPoint}&&end=all`;
        } else {
            const middle = limit.indexOf('-');
            const startPoint = limit.slice(0, (middle));
            const endPoint = limit.slice((middle + 1), limit.length);
            URL = URL + `?start=${startPoint}&&end=${endPoint}`;
        }
        setURL(URL);
    }

    return (
        <div className="py-8">
            <ScrollRestoration />
            <RoomHeader />
            <p className="text-center text-xl font-semibold py-2">Total Existing room is : {rooms.length}</p>
            <div className="my-8 w-[80%] mx-auto flex justify-between items-center">
                <div className="flex justify-center items-center gap-0">
                    <input type="text" placeholder="Find Your Preferred Room.." className="input input-bordered w-full rounded-r-none" />
                    <button className="btn btn-primary rounded-l-none">Search</button>
                </div>
                <div className="w-[30%] flex justify-center items-center gap-4">
                    <div className="flex justify-center items-center gap-1">
                        <MdFilterList size={20} className="font-semibold" />
                        <h4 className="font-medium">Filter By</h4>
                    </div>
                    <select onChange={handleFilter} className="w-[40%] select select-info" name="price">
                        <option disabled selected value={'all'}>Price</option>
                        <option value={'all'}>All</option>
                        <option value={'40-150'}>$40-$150</option>
                        <option value={'151-300'}>$151-$300</option>
                        <option value={'301-500'}>$301-$500</option>
                        <option value={'501 to more'}>$501 & more</option>
                    </select>
                </div>
            </div>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    rooms && rooms.map(room => (<RoomCard key={room._id} room={room} />))
                }
            </div>
        </div>
    );
};

export default Rooms;