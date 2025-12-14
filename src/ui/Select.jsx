const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="block rounded-sm border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-gray-900 mx-0.5 py-1.5 px-4 text-sm font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 cursor-pointer"
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
