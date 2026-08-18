import { useId } from "react";

// eslint-disable-next-line react/prop-types
const Input = ({ label, error, className = "", id, ...props }) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={inputId} className="text-body mb-1 text-black-200">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`h-12 px-4 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100 ${className}`}
        {...props}
      />
      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default Input;
