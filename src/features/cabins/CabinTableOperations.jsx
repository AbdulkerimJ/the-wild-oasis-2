import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
const CabinTableOperations = () => {
  return (
    <div className="flex gap-3 justify-end m-5">
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Name (A-Z)" },
          { value: "name-desc", label: "Name (Z-A)" },
          { value: "regularPrice-asc", label: "Price (Low to High)" },
          { value: "regularPrice-desc", label: "Price (High to Low)" },
        ]}
      />
    </div>
  );
};

export default CabinTableOperations;
