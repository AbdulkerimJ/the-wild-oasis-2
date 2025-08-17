function ButtonIcon({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-transparent border-0 p-2 rounded-sm transition hover:bg-gray-100 ${className}`}
      {...props}
    >
      <span className="w-9 h-9 text-blue-600 inline-flex">{children}</span>
    </button>
  );
}

export default ButtonIcon;
