import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold">All bookings</h1>
      <BookingTableOperations />
      <BookingTable />
    </div>
  );
}

export default Bookings;
