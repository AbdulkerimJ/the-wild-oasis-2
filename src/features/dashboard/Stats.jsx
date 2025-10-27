import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, cabins, numDays }) => {
  const totalRooms = cabins?.length || 0;

  // 1. Total Bookings
  const numBookings = bookings?.length || 0;

  // 2. Total Sales
  const sales =
    bookings?.reduce((total, booking) => total + booking.totalPrice, 0) || 0;

  // 3. Total Check-ins
  const numCheckIns = confirmedStays?.length || 0;

  // 4. Occupancy Rate
  const occupancyRate = confirmedStays
    ? (confirmedStays.reduce((nights, stay) => nights + stay.numNights, 0) /
        (totalRooms * numDays)) *
      100
    : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Stat
        icon={<HiOutlineBriefcase className="text-blue-500 dark:text-blue-400" />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes className="text-green-500 dark:text-green-400" />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays className="text-yellow-500 dark:text-yellow-400" />}
        title="Check-ins"
        value={numCheckIns}
        color="yellow"
      />
      <Stat
        icon={<HiOutlineChartBar className="text-rose-500 dark:text-rose-400" />}
        title="Occupancy Rate"
        value={`${occupancyRate.toFixed(1)}%`}
        color="red"
      />
    </div>
  );
};

export default Stats;
