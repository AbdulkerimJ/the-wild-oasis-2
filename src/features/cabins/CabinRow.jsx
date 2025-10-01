import { HiPencil, HiSquare2Stack } from "react-icons/hi2";
import { HiPencilSquare } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import { useDeleteCabin } from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";

export const CabinRow = ({ cabin }) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;
  const { isCreating, createCabin } = useCreateCabin();
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const handleDublicate = () => {
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
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-200">
        {/* Cabin Image */}
        <td className="pl-4">
          <div className="w-16 h-12 overflow-hidden rounded-sm">
            <img
              src={image}
              alt={`Cabin ${name}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </td>

        {/* Cabin Info */}
        <td className="px-4 py-3 font-medium text-gray-700">{name}</td>
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
            <button
              aria-label="Duplicate cabin"
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              onClick={handleDublicate}
              disabled={isCreating}
            >
              <HiSquare2Stack className="w-5 h-5" />
            </button>

            <button
              aria-label="Edit cabin"
              className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <HiPencilSquare className="w-5 h-5" />
            </button>

            <button
              aria-label="Delete cabin"
              onClick={() => deleteCabin(id)}
              disabled={isDeleting}
              className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <HiTrash className="w-5 h-5" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default CabinRow;
