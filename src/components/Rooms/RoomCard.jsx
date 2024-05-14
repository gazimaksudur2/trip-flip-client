import { Link } from 'react-router-dom';
import './RoomCardStyle.css';
import { Rating } from '@mui/material';
import { MdPreview } from 'react-icons/md';

const RoomCard = ({ room }) => {
    const { _id, room_title, room_description, customer_ratings, reviews, card_img } = room;
    // console.log(reviews.length);
    return (
        <Link to={`/singleroom/${_id}`} state={{id: _id}}>
            <div
                className="contain min-w-full rounded-lg bg-black shadow-secondary-1">
                <img
                    className="image rounded-lg w-full max-h-64"
                    src={card_img}
                    alt="Room Card Image" />
                <div className="p-6 overlay text-surface rounded-b-lg">
                    <h5 className="mb-2 text-xl font-semibold leading-tight">{room_title}</h5>
                    <p className="mb-4 text-sm">
                        {(room_description.slice(0,50)+" ...")}
                    </p>
                    <div className='w-full px-6 flex justify-between items-center'>
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                            <h2 className="text-sm font-normal text-white">
                                <h2 className='text-2xl font-medium font-source'>{parseFloat(customer_ratings)}</h2>
                                <Rating name="half-rating-read" defaultValue={customer_ratings} precision={0.5} readOnly />
                            </h2>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                            <MdPreview className='text-blue-600' size={25}/>
                            <h2 className="text-2xl font-medium font-source">{reviews.length}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;

// while fetching data through axios facing network error and server got crashed