import { useNavigate } from "react-router-dom";
import { MdPerson, MdHotel, MdLogin, MdLogout } from "react-icons/md";

function TodayItem({ activity }) {
  const navigate = useNavigate();
  const {
    id,
    status,
    numNights,
    guests: { fullName, countryFlag, nationality } = {},
  } = activity;

  const isArriving = status === "unconfirmed";
  const isDeparting = status === "checked-in";

  const handleAction = () => {
    if (isArriving) navigate(`/checkin/${id}`);
    if (isDeparting) navigate(`/bookings/${id}`);
  };

  return (
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 w-full">
  {/* Left info */}
  <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap min-w-0">
    {countryFlag && (
      <img src={countryFlag} alt={nationality} className="w-5 h-3 rounded flex-shrink-0" />
    )}

    <span
      className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
        isArriving ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
      }`}
    >
      {isArriving ? "ARRIVING" : "DEPARTING"}
    </span>

    <div className="flex flex-col min-w-0 truncate">
      <p className="text-xs sm:text-sm font-medium flex items-center gap-1 truncate">
        <MdPerson className="text-gray-500 flex-shrink-0" /> {fullName}
      </p>
      <p className="text-[9px] sm:text-xs text-gray-500 flex items-center gap-1">
        <MdHotel className="text-gray-400 flex-shrink-0" /> {numNights} night{numNights > 1 && "s"}
      </p>
    </div>
  </div>

  {/* Action Button */}
  <button
    onClick={handleAction}
    className={`m-1 sm:mt-0 flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full cursor-pointer transition-all duration-200 transform flex-shrink-0
      ${
        isArriving
          ? "bg-green-500 text-white hover:bg-green-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
          : "bg-blue-500 text-white hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
      }`}
  >
    {isArriving ? (
      <>
        <MdLogin className="text-sm" /> Check In
      </>
    ) : (
      <>
        <MdLogout className="text-sm" /> Check Out
      </>
    )}
  </button>
</div>


  );
}

export default TodayItem;
