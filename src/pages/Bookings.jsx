import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useBookings } from "../features/bookings/useBookings";
import Pagination from "../ui/Pagination";

function Bookings() {
  return (
    <div>
      <h1 className="text-2xl font-bold">All bookings</h1>
      <BookingTableOperations />
      <BookingTable />
    </div>
  );
}

export default Bookings;
