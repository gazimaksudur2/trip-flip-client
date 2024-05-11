
const FeatureRoomCard = ({content}) => {
    return (
        <div className="">
            <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className="rounded-t-lg w-full h-[20rem]" src={content.url} alt="" />
                </div>
                <div className="p-6 bg-gray-700 rounded-b-lg">
                    <h5 className="mb-2 text-xl font-medium leading-tight">{content.title}</h5>
                    <p className="mb-4 text-base">{content.description}</p>
                    <p className="text-base text-surface/75 dark:text-neutral-300">
                        <small>Last updated 20 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureRoomCard;