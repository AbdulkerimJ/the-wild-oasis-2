import { useNavigate } from "react-router-dom";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const getStatusClasses = (status) => {
  const lowerStatus = status.toLowerCase();
  switch (lowerStatus) {
    case "unconfirmed":
      return "bg-blue-100 text-blue-800";
    case "checked-in":
      return "bg-green-100 text-green-800";
    case "checked-out":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const BookingRow = ({ booking }) => {
  const navigate = useNavigate();
  const {
    id,
    guests,
    cabins,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    hasBreakfast,
    isPaid,
  } = booking;

  return (
    <tr
      className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
      onClick={() => navigate(`/bookings/${id}`)}
    >
      <td className="px-6 py-3.5 text-sm text-gray-500 whitespace-nowrap">
        {cabins.name}
      </td>
      <td className="px-6 py-3.5 text-sm font-medium text-gray-900 whitespace-nowrap">
        {guests.fullName}
      </td>
      <td className="px-6 py-3.5 text-sm text-gray-500 whitespace-nowrap">
        {formatDate(startDate)}
      </td>
      <td className="px-6 py-3.5 text-sm text-gray-500 whitespace-nowrap">
        {formatDate(endDate)}
      </td>
      <td className="px-6 py-3.5 text-sm text-gray-500 whitespace-nowrap">
        {numNights}
      </td>
      <td className="px-6 py-3.5 text-sm text-gray-500 whitespace-nowrap">
        {numGuests}
      </td>
      <td className="px-6 py-3.5 text-sm font-medium text-gray-900 whitespace-nowrap">
        ${totalPrice}
      </td>
      <td className="px-6 py-3.5 whitespace-nowrap">
        <span
          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
            status
          )}`}
        >
          {status.toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-3.5 text-sm whitespace-nowrap">
        <span className={hasBreakfast ? "text-green-600" : "text-gray-400"}>
          {hasBreakfast ? "Yes" : "No"}
        </span>
      </td>
      <td className="px-6 py-3.5 text-sm whitespace-nowrap">
        <span className={isPaid ? "text-green-600" : "text-red-600"}>
          {isPaid ? "Yes" : "No"}
        </span>
      </td>
    </tr>
  );
};

export default BookingRow;
