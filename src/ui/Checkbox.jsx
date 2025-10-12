import React from "react";

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {label && (
        <label htmlFor={id} className={`text-gray-700 select-none`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
