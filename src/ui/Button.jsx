import React from "react";

// Tailwind size classes
const sizes = {
  small: "text-sm px-2 py-1 uppercase font-semibold text-center",
  medium: "text-base px-4 py-3 font-medium text-center",
  large: "text-lg px-6 py-3 font-medium text-center",
};

// Tailwind variant classes
const variations = {
  primary: "text-white bg-blue-600 hover:bg-blue-700",
  secondary: "text-gray-600 bg-gray-100 border border-gray-200 hover:bg-gray-50",
  danger: "text-red-100 bg-red-700 hover:bg-red-800",
};

function Button({ size = "medium", variant = "primary", children, className = "", ...props }) {
  return (
    <button
      className={`${sizes[size]} ${variations[variant]} rounded-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
