import CabinsTableHeader from "./CabinsTableHeader";
import CabinRow from "./CabinRow";

const CabinsTable = ({ cabins }) => {
  return (
    <div className="overflow-x-auto rounded-lg relative border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <CabinsTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {cabins.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CabinsTable;
