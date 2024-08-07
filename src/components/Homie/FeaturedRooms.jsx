import { useEffect, useState } from "react";
import FeatureRoomCard from "./FeatureRoomCard";
// import YoutubeEmbed from "./YoutubeEmbed";

const FeaturedRooms = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch('carousel.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setContent(data);
            })
    }, []);

    return (
        <div className='md:my-16 space-y-6 flex flex-col justify-center items-center text-center'>
            <div className="px-[4%] md:w-[65%] my-5 mx-auto space-y-3 flex flex-col justify-center items-center">
                <h2 className='text-3xl font-jakarta font-bold'>Featured Room Collection</h2>
                <p className='font-source'>Indulge in opulent accommodations designed for discerning travelers seeking the ultimate in comfort and sophistication. Unforgettable luxury awaits you in our meticulously crafted Modern King Room</p>
            </div>
            <div className='w-[95%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 content-center'>
                {/* <YoutubeEmbed/> */}
                {
                    content && content.slice(0,4).map(cont=><FeatureRoomCard key={cont.id} content={cont}/>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;