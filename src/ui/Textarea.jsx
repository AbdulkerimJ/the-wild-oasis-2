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
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <textarea
        id={id}
        {...(register ? register(id, rules) : {})}  // 👈 works with RHF
        className={`
          w-full h-32 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-xs text-red-600">
          {error.message || error} {/* works with RHF or plain string */}
        </span>
      )}
    </div>
  );
};

export default Textarea;
