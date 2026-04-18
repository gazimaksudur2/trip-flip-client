const SkeletonCard = () => (
  <div className="w-full animate-pulse">
    <div className="w-full h-56 bg-gray-200 rounded-2xl" />
    <div className="mt-4 space-y-2">
      <div className="w-3/4 h-3 bg-gray-200 rounded-full" />
      <div className="w-1/2 h-3 bg-gray-200 rounded-full" />
    </div>
  </div>
);

const CardsSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default CardsSkeleton;
