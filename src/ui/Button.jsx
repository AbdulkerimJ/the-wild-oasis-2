const sizes = {
  sm: "text-sm px-3 py-1.5 rounded-sm",
  md: "text-base px-4 py-2 rounded-sm",
  lg: "text-lg px-6 py-3 rounded-sm",
};

const baseClasses = `
  inline-flex items-center justify-center gap-2 mx-0.5
  font-medium leading-none
  transition-all duration-300 ease-out
  transform hover:scale-[1.03] active:scale-[0.97]
  focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
  disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer
`;

const variants = {
  primary: `
    bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white
    shadow-md hover:shadow-lg hover:shadow-gray-900/20
    focus:ring-gray-500/40
  `,
  secondary: `
    bg-white/80 text-gray-900 border border-gray-300
    hover:bg-gray-100 hover:border-gray-400 hover:shadow-sm
    dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-gray-600
    focus:ring-gray-300/30 dark:focus:ring-gray-600/40
  `,
  success: `
    bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white
    hover:from-emerald-500 hover:to-emerald-700
    focus:ring-emerald-400/40
  `,
  danger: `
    bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white
    hover:from-red-500 hover:to-red-700
    focus:ring-red-400/40
  `,
  ghost: `
    bg-transparent text-gray-700 border border-gray-300
    hover:bg-gray-100
    dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800
    focus:ring-gray-300/40 dark:focus:ring-gray-600/40
  `,
  outline: `
    bg-transparent border-2 border-gray-700 text-gray-800
    hover:bg-gray-800 hover:text-white
    dark:border-gray-500 dark:text-gray-100 dark:hover:bg-gray-700
    focus:ring-gray-500/30 dark:focus:ring-gray-600/40
  `,
  link: `
    bg-transparent text-blue-600 underline-offset-4 hover:underline
    dark:text-blue-300
    focus:ring-blue-400/30 dark:focus:ring-blue-500/40
  `,
};

export default function Button({
  size = "md",
  variant = "primary",
  children,
  className = "",
  disabled = false,
  icon: Icon,
  ...props
}) {
  const classes = `
    ${baseClasses}
    ${sizes[size] || ""}
    ${variants[variant] || ""}
    ${className}
  `.trim();

  return (
    <button type="button" disabled={disabled} className={classes} {...props}>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{children}</span>
    </button>
  );
}
