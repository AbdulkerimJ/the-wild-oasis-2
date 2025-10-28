const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="block rounded-sm border border-indigo-200 bg-indigo-50 mx-0.5 py-1.5 px-4 text-sm font-medium text-gray-900 transition-all duration-200  hover:shadow-sm focus:outline-none focus:ring-2 cursor-pointer"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;