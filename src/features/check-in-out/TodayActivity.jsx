import Loader from "../../ui/Loader";
import NoActivity from "./NoActivity";
import TodayItem from "./TodayItem";
import { useTodayActivity } from "./useTodayActivity";

function TodayActivity() {
  const { isPending: isLoading, data: activities } = useTodayActivity();

  return (
    <div className="bg-white rounded-md p-6 border border-indigo-100 h-[40vh]">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Today</h2>

      {/* Separator */}
      <div className="border-b border-gray-200 mb-4"></div>

      {/* Content */}
      <div className="overflow-y-auto h-[calc(100%-72px)]">
        {isLoading ? (
          <Loader />
        ) : activities?.length === 0 ? (
          <NoActivity />
        ) : (
          <div className="space-y-3">
            {activities.map((activity) => (
              <TodayItem key={activity.id} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodayActivity;
