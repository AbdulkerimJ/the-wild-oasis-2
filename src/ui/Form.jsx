const Form = ({ type = "default", children, ...props }) => {
  return (
    <form
      className={`
        overflow-hidden text-sm
        ${type !== "modal" ? "p-6 md:p-10 bg-white border border-gray-200 rounded-md" : ""}
        ${type === "modal" ? "w-[80rem]" : ""}
      `}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
