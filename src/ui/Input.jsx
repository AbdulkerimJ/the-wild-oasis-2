const Input = ({
  label,
  id,
  error,
  register,
  rules = {},
  icon, // new prop for icon
  className = "",
  ...props
}) => {
  return (
    <div
      className={`w-full ${className} flex flex-col md:flex-row md:items-center md:gap-4`}
    >
      {label && (
        <label
          htmlFor={id}
          className="mb-1 md:mb-0 md:w-32 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <div className="flex-1 flex flex-col md:flex-auto">
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            id={id}
            {...(register ? register(id, rules) : {})}
            {...props}
            className={`
              w-full md:w-80 px-4 py-2 rounded-lg text-gray-800 text-sm
              bg-gray-50 border border-gray-300
              focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
              placeholder-gray-400
              disabled:bg-gray-100 disabled:cursor-not-allowed
              transition-colors duration-150
              ${icon ? "pl-10" : ""}  /* space for icon */
              ${error ? "border-rose-500 focus:ring-rose-500" : ""}
            `}
          />
        </div>
        {error && (
          <span className="text-sm font-medium text-rose-600 mt-2 block">
            {error.message || error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
