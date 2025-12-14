import React from "react";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Loader from "../../ui/Loader";
import Pagination from "../../ui/Pagination";
import BookingRow from "./BookingRow";

const BookingTable = () => {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Loader />;
  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 text-sm">
            <thead className="bg-gradient-to-r bg-blue-50 dark:bg-gray-800">
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
                    className="px-8 py-3.5 text-left text-xs font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
              {bookings.map((booking) => (
                <BookingRow key={booking.id} booking={booking} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <Pagination count={count} />
        </div>
      </div>
    </div>
  );
};

export default BookingTable;
