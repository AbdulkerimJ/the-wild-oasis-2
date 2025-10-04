const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-3 px-4 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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