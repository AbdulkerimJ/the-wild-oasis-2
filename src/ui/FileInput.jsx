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
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type="file"
        id={id}
        {...(register ? register(id, rules) : {})}
        {...props}
        className={`
          block w-full text-sm text-gray-600
          file:mr-4 file:py-2 file:px-4 
          file:rounded-md file:border-0
          file:text-sm file:font-medium
          file:bg-indigo-600 file:text-white
          hover:file:bg-indigo-700
          cursor-pointer
          ${error ? "border border-red-500" : ""}
          ${className}
        `}
      />

      {error && (
        <span className="text-xs text-red-600">
          {error.message || error}
        </span>
      )}
    </div>
  );
};

export default FileInput;
