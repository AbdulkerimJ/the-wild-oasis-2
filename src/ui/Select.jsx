const Select = ({ options, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-md p-2"
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
