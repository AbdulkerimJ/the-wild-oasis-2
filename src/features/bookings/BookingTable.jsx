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
    <>
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
                {bookings.map((booking) => (
                  <BookingRow key={booking.id} booking={booking} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination count={count} />
    </>
  );
};

export default BookingTable;