import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const CabinRow = ({ cabin }) => {
  const { id, maxCapacity, regularPrice, discount, image } = cabin;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => {
      toast.error(`Failed to delete cabin: ${error.message}`);
    },
  });

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      {/* Cabin Image */}
      <td className="pl-4 py-3">
        <div className="w-16 h-12 overflow-hidden rounded-lg shadow-sm">
          <img
            src={image}
            alt={`Cabin ${id}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </td>

      {/* Cabin Info */}
      <td className="px-4 py-3 font-medium text-gray-700">{id}</td>
      <td className="px-4 py-3 text-gray-600">{maxCapacity} guests</td>
      <td className="px-4 py-3 font-semibold text-gray-800">
        {formatCurrency(regularPrice)}
      </td>
      <td className="px-4 py-3 text-gray-500">
        {discount > 0 ? (
          <span className="text-green-600 font-medium">
            {formatCurrency(discount)}
          </span>
        ) : (
          <span className="text-gray-400 italic">No discount</span>
        )}
      </td>

      {/* Actions */}
      <td className="px-4 py-3">
        <div className="inline-flex gap-2">
          <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition">
            Edit
          </button>
          <button
            onClick={() => mutate(id)}
            disabled={isDeleting}
            className={`px-3 py-1 text-sm font-medium rounded-lg border transition bg-red-50 text-red-600 border-red-200 hover:bg-red-100
            `}
          >
            {" "}
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CabinRow;
