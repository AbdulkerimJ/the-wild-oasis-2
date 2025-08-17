function ButtonText({ children, className = "", ...props }) {
  return (
    <button
      className={`text-blue-600 font-medium text-center bg-transparent border-0 rounded-sm transition hover:text-blue-700 active:text-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonText;
