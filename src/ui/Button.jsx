const sizes = {
  small: "text-sm px-3 py-1.5 rounded-md",
  medium: "text-base px-4 py-2 rounded-lg",
  large: "text-lg px-6 py-3 rounded-xl",
};

const baseClasses = `
  inline-flex items-center justify-center
  rounded-lg px-6 py-3 font-semibold text-sm
  shadow-md cursor-pointer
  transition-all duration-300 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:shadow-none disabled:cursor-not-allowed
`;

const variations = {
  primary: `
    ${baseClasses}
    bg-gray-900 text-white
    hover:bg-gray-800 hover:shadow-lg
    active:bg-gray-700 active:scale-[0.975]
    focus:ring-gray-400
  `,
  secondary: `
    ${baseClasses}
    bg-white text-gray-900 border border-gray-300
    hover:bg-gray-50 hover:shadow-lg
    active:bg-gray-100 active:scale-[0.975]
    focus:ring-gray-300
  `,
  success: `
    ${baseClasses}
    bg-emerald-600 text-white
    hover:bg-emerald-500 hover:shadow-lg
    active:bg-emerald-700 active:scale-[0.975]
    focus:ring-emerald-300
  `,
  danger: `
    ${baseClasses}
    bg-red-600 text-white
    hover:bg-red-500 hover:shadow-lg
    active:bg-red-700 active:scale-[0.975]
    focus:ring-red-300
  `,
  ghost: `
    ${baseClasses}
    bg-transparent text-gray-800
    hover:bg-gray-100 hover:shadow-sm
    active:bg-gray-200 active:scale-[0.975]
    focus:ring-gray-200
  `,
  active: `
    ${baseClasses}
    bg-blue-600 text-white
    hover:bg-blue-500 hover:shadow-lg
    active:bg-blue-700 active:scale-[0.975]
    focus:ring-blue-300
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
