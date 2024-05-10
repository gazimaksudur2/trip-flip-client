import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Rooms = () => {
    const { user } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/rooms?email=${user?.email}&&name=${user?.displayName}`, { withCredentials: true })
            .then(res => {
                setRooms(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user]);
    console.log(rooms);
    return (
        <div>
            <h2 className='text-2xl font-semibold font-source'>This is from rooms</h2>
            <p>Total Existing room is : {rooms.length}</p>
        </div>
    );
};

export default Rooms;