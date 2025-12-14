const FileInput = ({
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
          className="mb-1 md:mb-0 md:w-32 text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <div className="flex flex-col md:flex-auto">
        <input
          type="file"
          id={id}
          {...(register ? register(id, rules) : {})}
          {...props}
          className={`
            w-full md:w-80
            text-sm text-gray-600 dark:text-gray-200
            bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-medium
            file:bg-indigo-600 file:text-white
            hover:file:bg-indigo-700
            cursor-pointer
            ${className}
          `}
        />
        {error && (
          <span className="text-xs text-red-600 dark:text-red-400 mt-1">
            {error.message || error}
          </span>
        )}
      </div>
    </div>
  );
};

export default FileInput;
