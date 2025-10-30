const CabinHeader = () => {
  const headers = ["#", "Cabin", "Capacity", "Price", "Discount", "Actions"];

  return (
    <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <tr>
        {headers.map((header) => (
          <th
            key={header}
            className="px-2 py-2 text-xs font-semibold text-gray-900 uppercase tracking-wider sm:px-6 sm:py-4"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CabinHeader;
