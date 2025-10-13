import { useBooking } from "./useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import Loader from "../../ui/Loader";
import {
  MdArrowBack,
  MdPerson,
  MdDateRange,
  MdAttachMoney,
  MdLocalDining,
  MdCheckCircle,
  MdApartment,
  MdEmail,
  MdEvent,
  MdFlag,
  MdTimer,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";

function BookingDetail() {
  const { booking, isCheckingBooking } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isCheckingBooking) return <Loader />;

  if (!booking)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-500">
        <p>No booking found.</p>
      </div>
    );

  const {
    id,
    created_at,
    totalPrice,
    numNights,
    numGuests,
    startDate,
    endDate,
    hasBreakfast,
    status,
    isPaid,
    cabins: cabin,
    guests: guest,
  } = booking;

  const handleCheckout = () => {
    checkout({ bookingId: id });
  }
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const daysAgo = Math.floor(
    (new Date() - new Date(created_at)) / (1000 * 60 * 60 * 24)
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "checked-in":
        return "bg-green-100 text-green-700 border-green-300";
      case "checked-out":
        return "bg-gray-100 text-gray-700 border-gray-300";
      case "unconfirmed":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-600 border-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-14 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white border border-indigo-100 shadow-sm rounded-3xl px-8 py-6 relative">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-4">
              Booking #{id}
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full border ${getStatusStyle(
                  status
                )}`}
              >
                {status === "checked-in"
                  ? "Checked In"
                  : status === "checked-out"
                  ? "Checked Out"
                  : "Unconfirmed"}
              </span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Created on {formatDate(created_at)}
            </p>
          </div>

          <div className="flex gap-8 text-center mt-4 md:mt-0">
            <Stat
              title="Total"
              value={`$${totalPrice}`}
              icon={<MdAttachMoney />}
            />
            <Stat title="Nights" value={numNights} icon={<MdDateRange />} />
            <Stat title="Guests" value={numGuests} icon={<MdPerson />} />
          </div>

          <button
            onClick={moveBack}
            className="mt-4 md:mt-0 px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-2 shadow-sm font-medium"
          >
            <MdArrowBack className="text-lg" /> Back
          </button>
        </div>

        {/* When Booked */}
        <div className="bg-white border border-indigo-100 shadow-sm rounded-3xl px-8 py-6 flex items-center gap-4">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
            <MdTimer className="text-2xl" />
          </div>
          <div>
            <h2 className="text-base font-medium text-gray-800">
              Booking Timeline
            </h2>
            <p className="text-gray-600">
              Booked on{" "}
              <span className="font-medium">{formatDate(created_at)}</span> —{" "}
              <span className="text-indigo-600 font-medium">
                {daysAgo === 0
                  ? "today"
                  : daysAgo === 1
                  ? "1 day ago"
                  : `${daysAgo} days ago`}
              </span>
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guest Info */}
          <div className="bg-white rounded-3xl border border-indigo-100 shadow-sm p-8 hover:shadow-md transition-all">
            <SectionHeader title="Guest Information" icon={<MdPerson />} />
            <div className="space-y-5 mt-6">
              <Info
                label="Full Name"
                value={guest?.fullName}
                icon={<MdPerson />}
              />
              <Info label="Email" value={guest?.email} icon={<MdEmail />} />
              <Info
                label="Nationality"
                value={guest?.nationality}
                icon={<MdFlag />}
              />
              <Info
                label="National ID"
                value={guest?.nationalID}
                icon={<MdCheckCircle />}
              />
              <div className="flex items-center gap-3 mt-3">
                {guest?.countryFlag && (
                  <img
                    src={guest.countryFlag}
                    alt={guest.nationality}
                    className="w-7 h-5 rounded shadow-sm border"
                  />
                )}
                <span className="text-sm text-gray-500">
                  {guest?.nationality}
                </span>
              </div>
            </div>
          </div>

          {/* Booking Info */}
          <div className="bg-white rounded-3xl border border-indigo-100 shadow-sm p-8 hover:shadow-md transition-all">
            <SectionHeader title="Booking Details" icon={<MdApartment />} />
            <div className="space-y-5">
              <Info label="Cabin" value={cabin?.name} icon={<MdApartment />} />
              <Info
                label="Check-in"
                value={formatDate(startDate)}
                icon={<MdDateRange />}
              />
              <Info
                label="Check-out"
                value={formatDate(endDate)}
                icon={<MdDateRange />}
              />
              <Info
                label="Breakfast"
                value={hasBreakfast ? "Yes" : "No"}
                icon={<MdLocalDining />}
                color={hasBreakfast ? "text-green-600" : "text-gray-400"}
              />
              <Info
                label="Payment"
                value={isPaid ? "Paid" : "Pending"}
                icon={<MdAttachMoney />}
                color={isPaid ? "text-green-600" : "text-red-500"}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          {status === "unconfirmed" && (
            <button
              className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/checkin/${id}`)}
            >
              Check In
            </button>
          )}

          {status === "checked-in" && (
            <button
              className="flex items-center gap-2 px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isCheckingOut}
              onClick={handleCheckout}
            >
              Check Out
            </button>
          )}

          <button
            onClick={moveBack}
            className="flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 rounded-full shadow-sm hover:bg-gray-300 transition-all duration-300 cursor-pointer"
          >
            <MdArrowBack /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600 mb-2">
        {icon}
      </div>
      <span className="text-xs text-gray-500">{title}</span>
      <span className="font-medium text-base">{value}</span>
    </div>
  );
}

function SectionHeader({ title, icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600">{icon}</div>
      <h2 className="text-base font-medium tracking-tight">{title}</h2>
    </div>
  );
}

function Info({ label, value, icon, color = "text-gray-700" }) {
  return (
    <div className="flex items-center justify-between border border-indigo-100 rounded-2xl px-5 py-3 hover:bg-indigo-50 transition-all">
      <div className="flex items-center gap-3">
        <div className={`text-base ${color}`}>{icon}</div>
        <span className="font-normal text-sm text-gray-700">{label}</span>
      </div>
      <span className={`font-medium text-sm ${color}`}>{value}</span>
    </div>
  );
}

export default BookingDetail;
