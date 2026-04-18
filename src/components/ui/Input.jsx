import { forwardRef } from 'react';

const Input = forwardRef(({ label, error, className = '', type = 'text', ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      )}
      <input
        ref={ref}
        type={type}
        className={`
          block w-full rounded-lg border bg-white px-4 py-2.5
          text-gray-700 placeholder-gray-400
          transition-colors duration-200
          border-gray-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200
          focus:outline-none
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-error focus:border-error focus:ring-red-200' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
