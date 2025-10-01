import Filter from "../../ui/Filter";
const CabinTableOperations = () => {
  return (
    <div className="flex justify-end m-5">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </div>
  );
};

export default CabinTableOperations;
