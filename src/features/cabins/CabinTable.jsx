import CabinsTableHeader from "./CabinsTableHeader";
import CabinRow from "./CabinRow";
import { useSearchParams } from "react-router-dom";

const CabinsTable = ({ cabins }) => {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";

  // 1. Filtering
  let filteredCabins = [...cabins];
  if (filterValue === "with-discount") {
    filteredCabins = filteredCabins.filter((cabin) => cabin.discount > 0);
  } else if (filterValue === "no-discount") {
    filteredCabins = filteredCabins.filter((cabin) => cabin.discount === 0);
  }

  // 2. Sorting
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = [...filteredCabins].sort((a, b) => {
    if (typeof a[field] === "string") {
      return a[field].localeCompare(b[field]) * modifier;
    }
    return (a[field] - b[field]) * modifier;
  });

  return (
    <div className="overflow-x-auto rounded-lg relative border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <CabinsTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedCabins?.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CabinsTable;
