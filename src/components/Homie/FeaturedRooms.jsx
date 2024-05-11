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
        <div className='my-4 md:my-16 space-y-6 flex flex-col justify-center items-center text-center'>
            <div className="px-[4%] md:px-[15%] space-y-3 flex flex-col justify-center items-center">
                <h2 className='text-3xl font-jakarta font-bold'>Featured Room Collection</h2>
                <p className='font-source'>Indulge in opulent accommodations designed for discerning travelers seeking the ultimate in comfort and sophistication. Unforgettable luxury awaits you</p>
            </div>
            <div className='w-[85%] mx-auto grid grid-cols-2 gap-10 content-center'>
                {/* <YoutubeEmbed/> */}
                {
                    content && content.map(cont=><FeatureRoomCard key={cont.id} content={cont}/>)
                }
            </div>
        </div>
    );
};

export default FeaturedRooms;