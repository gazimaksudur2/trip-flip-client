const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl font-jakarta">
        {title}
      </h2>
      <div className="flex justify-center mx-auto mt-2 mb-4">
        <span className="inline-block w-40 h-1 bg-brand-500 rounded-full" />
        <span className="inline-block w-3 h-1 mx-1 bg-brand-500 rounded-full" />
        <span className="inline-block w-1 h-1 bg-brand-500 rounded-full" />
      </div>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-gray-600 font-source">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
