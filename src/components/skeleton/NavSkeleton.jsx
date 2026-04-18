const NavSkeleton = () => {
  return (
    <div className="w-full bg-gray-900 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gray-700 rounded-full" />
          <div className="w-20 h-3 bg-gray-700 rounded-full" />
        </div>
        <div className="hidden lg:flex items-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-16 h-3 bg-gray-700 rounded-full" />
          ))}
        </div>
        <div className="w-9 h-9 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
};

export default NavSkeleton;
