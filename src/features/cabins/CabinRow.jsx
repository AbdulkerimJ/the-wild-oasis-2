import {
  HiPencilSquare,
  HiTrash,
  HiDocumentDuplicate,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

const CabinRow = ({
  index,
  cabin,
  onDuplicate,
  onDelete,
  isCreating,
  isDeleting,
}) => {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      {/* Index */}
      <td className="px-2 py-3 whitespace-nowrap text-xs font-medium text-gray-900 sm:px-6 sm:py-4">
        {index + 1}
      </td>

      {/* Cabin Image + Name */}
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
            <div className="text-sm font-medium text-gray-900 truncate">
              {name}
            </div>
          </div>
        </div>
      </td>

      {/* Capacity */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {maxCapacity} guests
      </td>

      {/* Price */}
      <td className="px-2 py-3 whitespace-nowrap text-sm font-semibold text-gray-900 sm:px-6 sm:py-4">
        {formatCurrency(regularPrice)}
      </td>

      {/* Discount */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {discount > 0 ? (
          <div className="flex flex-col">
            <span className="text-green-600 font-medium">{discount}% off</span>
            <span className="text-xs text-gray-500">
              {formatCurrency(regularPrice * (1 - discount / 100))}
            </span>
          </div>
        ) : (
          <span className="text-gray-400 italic">No discount</span>
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-3 sm:px-6 sm:py-4">
        <div className="inline-flex gap-1 sm:gap-2">
          {/* Duplicate */}
          <button
            aria-label="Duplicate cabin"
            className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 disabled:opacity-50 sm:p-2"
            onClick={() => onDuplicate(cabin)}
            disabled={isCreating}
          >
            <HiDocumentDuplicate className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Edit */}
          <button
            aria-label="Edit cabin"
            className="p-1.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-800 transition-colors duration-200 sm:p-2"
          >
            <HiPencilSquare className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Delete */}
          <button
            aria-label="Delete cabin"
            onClick={() => onDelete(id)}
            disabled={isDeleting}
            className="p-1.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 transition-colors duration-200 disabled:opacity-50 sm:p-2"
          >
            <HiTrash className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CabinRow;
