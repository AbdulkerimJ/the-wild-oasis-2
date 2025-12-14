import { useSearchParams } from "react-router-dom";
import { HiPencilSquare, HiTrash, HiDocumentDuplicate } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";

const CabinTable = ({ cabins = [] }) => {
  const [searchParams] = useSearchParams();
  const { isCreating, createCabin } = useCreateCabin();
  const { isDeleting, deleteCabin } = useDeleteCabin();

  // Filtering
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins = [...cabins];

  if (filterValue === "with-discount")
    filteredCabins = filteredCabins.filter(({ discount }) => discount > 0);
  else if (filterValue === "no-discount")
    filteredCabins = filteredCabins.filter(({ discount }) => discount === 0);

  // Sorting
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedCabins = [...filteredCabins].sort((a, b) => {
    if (typeof a[field] === "string")
      return a[field].localeCompare(b[field]) * modifier;
    return (a[field] - b[field]) * modifier;
  });

  const handleDuplicate = ({
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  }) => {
    const prefix = "Copy of ";
    createCabin({
      name: `${name.startsWith(prefix) ? name : prefix + name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  };

  return (
    <div className="max-w-7xl overflow-hidden rounded-md flex flex-col w-full mx-auto">
      <div className="overflow-x-auto sm:text-left rounded-lg relative border border-gray-200 dark:border-gray-800">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900">
          <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800">
            <tr>
              {["#", "Cabin", "Capacity", "Price", "Discount", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-2 py-2 text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider sm:px-6 sm:py-4"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {sortedCabins.map((cabin, index) => {
              // ✅ Destructure each cabin once here
              const { id, name, maxCapacity, regularPrice, discount, image } =
                cabin;

              return (
                <tr
                  key={id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {/* Index */}
                  <td className="px-2 py-3 whitespace-nowrap text-xs font-medium text-gray-900 dark:text-gray-100 sm:px-6 sm:py-4">
                    {index + 1}
                  </td>

                  {/* Cabin Image and Name */}
                  <td className="px-2 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-10 overflow-hidden rounded-sm flex-shrink-0 sm:w-16 sm:h-12">
                        <img
                          src={image}
                          alt={`Cabin ${name}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                          {name}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Capacity */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {maxCapacity} guests
                  </td>

                  {/* Price */}
                  <td className="px-2 py-3 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-gray-100 sm:px-6 sm:py-4">
                    {formatCurrency(regularPrice)}
                  </td>

                  {/* Discount */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {discount > 0 ? (
                      <div className="flex flex-col">
                        <span className="text-green-600 font-medium">
                          {discount}% off
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatCurrency(regularPrice * (1 - discount / 100))}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500 italic">
                        No discount
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-3 sm:px-6 sm:py-4">
                    <div className="inline-flex gap-1 sm:gap-2">
                      {/* Duplicate */}
                      <button
                        aria-label="Duplicate cabin"
                        className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed sm:p-2"
                        onClick={() =>
                          handleDuplicate({
                            name,
                            maxCapacity,
                            regularPrice,
                            discount,
                            image,
                          })
                        }
                        disabled={isCreating}
                      >
                        <HiDocumentDuplicate className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      {/* Edit */}
                      <button
                        aria-label="Edit cabin"
                        className="p-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-100 dark:hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed sm:p-2"
                      >
                        <HiPencilSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      {/* Delete */}
                      <button
                        aria-label="Delete cabin"
                        onClick={() => deleteCabin(id)}
                        disabled={isDeleting}
                        className="p-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-100 dark:hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed sm:p-2"
                      >
                        <HiTrash className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CabinTable;
