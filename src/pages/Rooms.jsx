import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import RoomHeader from "../components/Rooms/RoomHeader";
import { ScrollRestoration } from "react-router-dom";
import RoomCard from "../components/Rooms/RoomCard";

const Rooms = () => {
    const { user } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // axios.get(`http://localhost:5000/rooms?email=${user?.email}&&name=${user?.displayName}`, { withCredentials: true })
        axios.get('http://localhost:5000/rooms', { withCredentials: true })
            .then(res => {
                setRooms(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user]);
    console.log(rooms);
    
    return (
        <div className="py-8">
            <ScrollRestoration/>
            <RoomHeader/>

            {/* Implement here filter functionality like the windows settings application filter */}
            <p className="text-center py-5">Total Existing room is : {rooms.length}</p>
            <p className="text-center py-5">Filter your rooms for your own price range.</p>
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
            </div>
        </div>
    );
};

export default Rooms;