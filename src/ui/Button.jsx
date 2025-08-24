const sizes = {
  small: "text-sm px-3 py-1.5 rounded-md",
  medium: "text-base px-4 py-2 rounded-lg",
  large: "text-lg px-6 py-3 rounded-xl",
};

const variations = {
  primary: `
    bg-gray-900 text-white font-medium shadow-sm cursor-pointer
    hover:bg-gray-800 hover:shadow
    active:bg-gray-700 active:scale-[0.98]
    disabled:bg-gray-300 disabled:text-gray-100 disabled:cursor-not-allowed disabled:shadow-none
    transition-all duration-200
  `,
  secondary: `
    bg-white text-gray-700 border border-gray-300 font-medium shadow-sm cursor-pointer
    hover:bg-gray-50 hover:shadow
    active:bg-gray-100 active:scale-[0.98]
    disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:shadow-none
    transition-all duration-200
  `,
  success: `
    bg-green-600 text-white font-medium shadow-sm cursor-pointer
    hover:bg-green-700 hover:shadow
    active:bg-green-800 active:scale-[0.98]
    disabled:bg-green-300 disabled:cursor-not-allowed disabled:shadow-none
    transition-all duration-200
  `,
  danger: `
    bg-red-600 text-white font-medium shadow-sm cursor-pointer
    hover:bg-red-700 hover:shadow
    active:bg-red-800 active:scale-[0.98]
    disabled:bg-red-300 disabled:cursor-not-allowed disabled:shadow-none
    transition-all duration-200
  `,
  ghost: `
    bg-transparent text-gray-700 font-medium cursor-pointer
    hover:bg-gray-100
    active:bg-gray-200 active:scale-[0.98]
    disabled:text-gray-400 disabled:cursor-not-allowed
    transition-all duration-200
  `,
};

function Button({ size = "medium", variant = "primary", children, className = "", ...props }) {
  return (
    <button
      className={`${sizes[size]} ${variations[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
