import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Loader from "../../ui/Loader";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const DashboardLayout = () => {
  // Fetch all data here at once
  const {
    isPending: isLoadingBookings,
    bookings,
    numDays,
  } = useRecentBookings();
  const { isPending: isLoadingStays, confirmedStays } = useRecentStays();
  const { isLoading: isLoadingCabins, cabins } = useCabins();

  const isLoading = isLoadingBookings || isLoadingStays || isLoadingCabins;

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen text-gray-800 dark:text-gray-100 ">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        cabins={cabins}
        numDays={numDays}
      />

      {/* Activity + DurationChart side by side */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2">
          <TodayActivity />
        </div>
        <div className="lg:w-1/2">
          <DurationChart confirmedStays={confirmedStays} />
        </div>
      </div>

      {/* SalesChart below */}
      <div className="mt-6">
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>
    </div>
  );
};


export default DashboardLayout;
