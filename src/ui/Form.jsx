const Form = ({ type = "default", children, className = "", ...props }) => {
  return (
    <form
      className={`
        w-full max-w-3xl mx-auto
        rounded-lg
        border border-gray-200 dark:border-gray-800
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        p-6 md:p-10
        space-y-6
        ${className}
      `}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
