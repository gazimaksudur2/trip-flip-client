import { Link } from 'react-router-dom';
import './RoomCardStyle.css';

const RoomCard = () => {
    const id = 'id';
    return (
        <Link to={`/singleroom/:${id}`}>
            <div
                className="contain min-w-full rounded-lg bg-black shadow-secondary-1">
                <img
                    className="image rounded-lg w-full"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
                <div className="p-6 overlay text-surface rounded-b-lg">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                    <p className="mb-4 text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the cards content.
                    </p>
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2"
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        Button
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;