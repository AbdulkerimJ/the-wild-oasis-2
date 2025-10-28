import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Loader from "../../ui/Loader";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const DashboardLayout = () => {
  // Fetch all data here at once
  const { isPending: isLoadingBookings, bookings, numDays } = useRecentBookings();
  const { isPending: isLoadingStays, confirmedStays } = useRecentStays();
  const { isLoading: isLoadingCabins, cabins } = useCabins();

  const isLoading = isLoadingBookings || isLoadingStays || isLoadingCabins;

  // Unified loading check
  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-5 min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 ">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabins={cabins}
        numDays={numDays}
      />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
};

export default DashboardLayout;
