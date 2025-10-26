const Input = ({
  label,
  id,
  error,
  register,
  rules = {},
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
        <input
          id={id}
          {...(register ? register(id, rules) : {})}
          {...props}
          className={`
            w-full md:w-80  /* max width on desktop */
            px-4 py-2 rounded-lg
            text-gray-800 text-sm
            bg-gray-50
            border border-gray-300
            focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
            placeholder-gray-400
            disabled:bg-gray-100 disabled:cursor-not-allowed
            transition-colors duration-150
            ${error ? "border-rose-500 focus:ring-rose-500" : ""}
          `}
        />
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
