import React from "react";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Loader from "../../ui/Loader";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const getStatusClasses = (status) => {
  const lowerStatus = status.toLowerCase();
  switch (lowerStatus) {
    case "unconfirmed":
      return "bg-blue-100 text-blue-800";
    case "confirmed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const BookingTable = () => {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Loader />;
  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <tr>
                {[
                  "Cabin",
                  "Guest",
                  "Check-In",
                  "Check-Out",
                  "Nights",
                  "Guests",
                  "Total Price",
                  "Status",
                  "Breakfast",
                  "Paid",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => {
                // ✅ destructure properties here
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
                    key={id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {cabins.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {guests.fullName}
                    </td>
                    
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(startDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(endDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {numNights}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {numGuests}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${totalPrice}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
                          status
                        )}`}
                      >
                        {status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {hasBreakfast ? (
                        <span className="text-green-600">Yes</span>
                      ) : (
                        <span className="text-gray-400">No</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {isPaid ? (
                        <span className="text-green-600">Yes</span>
                      ) : (
                        <span className="text-red-600">No</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingTable;
