const Form = ({ type = "default", children, ...props }) => {
  return (
    <form
      className="text-sm bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden p-4 m-2"
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
