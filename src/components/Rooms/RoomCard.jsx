import { Link } from 'react-router-dom';
import './RoomCardStyle.css';

const RoomCard = ({ room }) => {
    const { _id, room_title, room_description, customer_ratings, review_count } = room;
    return (
        <Link to={`/singleroom/:${_id}`} state={{id: _id}}>
            <div
                className="contain min-w-full rounded-lg bg-black shadow-secondary-1">
                <img
                    className="image rounded-lg w-full"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
                <div className="p-6 overlay text-surface rounded-b-lg">
                    <h5 className="mb-2 text-xl font-semibold leading-tight">{room_title}</h5>
                    <p className="mb-4 text-sm">
                        {(room_description.slice(0,50)+" ...")}
                    </p>
                    <div className='w-full px-6 flex justify-between items-center'>
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-amber-100/60">
                            <h2 className="text-sm font-normal text-amber-500">{customer_ratings}</h2>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-amber-100/60">
                            <h2 className="text-sm font-normal text-amber-500">{review_count}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;