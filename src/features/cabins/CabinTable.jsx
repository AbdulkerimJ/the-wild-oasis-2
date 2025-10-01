import CabinsTableHeader from "./CabinsTableHeader";
import CabinRow from "./CabinRow";
import { useSearchParams } from "react-router-dom";

const CabinsTable = ({ cabins }) => {
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";

  if (filterValue === "with-discount") {
    cabins = cabins?.filter((cabin) => cabin.discount > 0);
  } else if (filterValue === "no-discount") {
    cabins = cabins.filter((cabin) => cabin.discount === 0);
  }

  return (
    <div className="overflow-x-auto rounded-lg relative border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <CabinsTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {cabins?.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CabinsTable;
