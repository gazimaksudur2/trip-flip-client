const FeatureRoomCard = ({ content }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          src={content.url}
          alt={content.title}
        />
        {content.price && (
          <span className="absolute top-4 right-4 bg-brand-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
            ${content.price} / night
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 font-jakarta">{content.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{content.description}</p>
      </div>
    </div>
  );
};

export default FeatureRoomCard;
