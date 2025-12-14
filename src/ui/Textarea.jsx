const Textarea = ({
  label,
  id,
  error,
  register,
  rules = {},
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        {...(register ? register(id, rules) : {})} // 👈 works with RHF
        className={`
          w-full h-32 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm shadow-sm
          bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          dark:focus:ring-indigo-400 dark:focus:border-indigo-400
          placeholder-gray-400 dark:placeholder-gray-500
          disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed
          ${
            error
              ? "border-red-500 dark:border-red-500 focus:ring-red-500 focus:border-red-500"
              : ""
          }
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-xs text-red-600 dark:text-red-400">
          {error.message || error} {/* works with RHF or plain string */}
        </span>
      )}
    </div>
  );
};

export default Textarea;
