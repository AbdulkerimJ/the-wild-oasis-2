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

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();

  if (isLoading) return <Loader />;
  if (!booking)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-500">
        <p>No booking found.</p>
      </div>
    );

  const b = booking;
  const cabin = b.cabins;
  const guest = b.guests;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const daysAgo = Math.floor(
    (new Date() - new Date(b.created_at)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br py-14 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white border border-indigo-100 shadow-sm rounded-3xl px-8 py-6">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">
              Booking #{b.id}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Created on {formatDate(b.created_at)}
            </p>
          </div>

          <div className="flex gap-8 text-center mt-4 md:mt-0">
            <Stat title="Total" value={`$${b.totalPrice}`} icon={<MdAttachMoney />} />
            <Stat title="Nights" value={b.numNights} icon={<MdDateRange />} />
            <Stat title="Guests" value={b.numGuests} icon={<MdPerson />} />
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
            <h2 className="text-base font-medium text-gray-800">Booking Timeline</h2>
            <p className="text-gray-600">
              Booked on <span className="font-medium">{formatDate(b.created_at)}</span> —{" "}
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
              <Info label="Full Name" value={guest?.fullName} icon={<MdPerson />} />
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
              <Info label="Check-in" value={formatDate(b.startDate)} icon={<MdDateRange />} />
              <Info label="Check-out" value={formatDate(b.endDate)} icon={<MdDateRange />} />
              <Info
                label="Breakfast"
                value={b.hasBreakfast ? "Yes" : "No"}
                icon={<MdLocalDining />}
                color={b.hasBreakfast ? "text-green-600" : "text-gray-400"}
              />
              <Info
                label="Status"
                value={b.status}
                icon={<MdCheckCircle />}
                color={
                  b.status === "unconfirmed"
                    ? "text-orange-600"
                    : b.status === "checked-in"
                    ? "text-green-600"
                    : "text-gray-500"
                }
              />
              <Info
                label="Payment"
                value={b.isPaid ? "Paid" : "Pending"}
                icon={<MdAttachMoney />}
                color={b.isPaid ? "text-green-600" : "text-red-500"}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button
            onClick={moveBack}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:opacity-90 transition-all shadow-md flex items-center gap-2 font-medium active:scale-95"
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
      <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600 mb-2">{icon}</div>
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