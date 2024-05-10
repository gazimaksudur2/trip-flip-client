import NavSkeleton from '../components/skeleton/NavSkeleton';
import CardsSkeleton from '../components/skeleton/CardsSkeleton';

const LoadingSkeleton = () => {
    return (
        <div className='min-h-screen w-[90%] mx-auto flex flex-col justify-center items-center'>
            <NavSkeleton/>
            <CardsSkeleton/>
        </div>
    );
};

export default LoadingSkeleton;