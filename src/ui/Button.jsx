const sizes = {
  small: "text-sm px-3 py-1.5 rounded-md",
  medium: "text-base px-4 py-2 rounded-lg",
  large: "text-lg px-6 py-3 rounded-xl",
};

const baseClasses = `
  inline-flex items-center justify-center
  rounded-xl px-6 py-3 font-semibold text-sm leading-none
  shadow-lg shadow-gray-200/50 backdrop-blur-sm cursor-pointer
  transition-all duration-300 ease-out
  transform hover:scale-105 active:scale-95
  focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white
  disabled:shadow-sm disabled:cursor-not-allowed disabled:opacity-50
`;

const variations = {
  primary: `
    ${baseClasses}
    bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 text-white
    hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 hover:shadow-xl hover:shadow-gray-900/25
    active:from-gray-600 active:via-gray-700 active:to-gray-800
    focus:ring-gray-500/30
  `,
  secondary: `
    ${baseClasses}
    bg-white/80 text-gray-900 border border-gray-200/60
    hover:bg-gray-50/80 hover:border-gray-300/80 hover:shadow-xl hover:shadow-gray-200/25
    active:bg-gray-100/80 active:border-gray-400/60 active:scale-95
    focus:ring-gray-300/30
  `,
  success: `
    ${baseClasses}
    bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white
    hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 hover:shadow-xl hover:shadow-emerald-500/25
    active:from-emerald-700 active:via-emerald-800 active:to-emerald-900 active:scale-95
    focus:ring-emerald-400/30
  `,
  danger: `
    ${baseClasses}
    bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white
    hover:from-red-500 hover:via-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/25
    active:from-red-700 active:via-red-800 active:to-red-900 active:scale-95
    focus:ring-red-400/30
  `,
  ghost: `
    ${baseClasses}
    bg-white/50 text-gray-800 border border-gray-200/50
    hover:bg-gray-100/80 hover:border-gray-300/60 hover:shadow-md hover:shadow-gray-200/20
    active:bg-gray-200/80 active:border-gray-400/60 active:scale-95
    focus:ring-gray-300/30
  `,
  active: `
    ${baseClasses}
    bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white
    hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-500/25
    active:from-blue-700 active:via-blue-800 active:to-blue-900 active:scale-95
    focus:ring-blue-400/30
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