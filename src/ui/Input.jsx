const Input = ({ label, id, error, register, rules = {}, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label htmlFor={id} className="text-sm font-medium text-gray-700">{label}</label>}

      <input
        id={id}
        {...(register ? register(id, rules) : {})}
        {...props}
        className={`w-full rounded-md border px-3 py-2 text-sm shadow-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
          ${className}`}
      />

      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
};

export default Input;