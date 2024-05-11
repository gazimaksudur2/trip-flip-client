import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ data }) => {
    const { customer_name, address, contacts, review, rating, date, imageurl, type } = data;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                    <div className='lg:w-[80%] px-10 mb-3 flex justify-between items-center'>
                        <div className="avatar relative">
                            <div className="w-16 rounded-full">
                                <img className='w-12 avatar rounded-full h-12 object-cover' src={imageurl} alt="" />
                            </div>
                            <div className={`absolute text-white h-6 ${type === 'regular' ? 'w-12 -right-8' : 'w-8 -right-5'} z-10 font-medium rounded-md ${type === 'elite' ? 'bg-green-400' : 'bg-red-400'} p-1 text-xs font-roboto top-0 `} >
                                {type}
                            </div>
                        </div>
                        <div className="flex items-center flex-col-reverse">
                            <p className="text-gray-600">{date}</p>
                            <ReactStars
                                edit={true}
                                count={5}
                                value={rating}
                                size={20}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                    <div className='p-2'>
                        <h3 className="text-xl font-semibold mb-2">{customer_name}</h3>
                        <p className="text-gray-600 mb-2 font-ubuntu text-sm">{address}</p>
                        <p className="text-gray-600 mb-2 font-ubuntu text-sm">{contacts}</p>
                    </div>
                    <p className="text-gray-700 mb-4 font-normal">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;