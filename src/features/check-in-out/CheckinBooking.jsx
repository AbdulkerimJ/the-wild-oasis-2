import { useBooking } from "../bookings/useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import Loader from "../../ui/Loader";
import { useState } from "react";
import Checkbox from "../../ui/Checkbox";
import {
  MdArrowBack,
  MdPerson,
  MdDateRange,
  MdAttachMoney,
  MdCheckCircle,
  MdApartment,
  MdLocalDining,
  MdEvent,
} from "react-icons/md";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "../check-in-out/useCheckin";

function CheckinBooking() {
  const { booking, isFetching } = useBooking();
  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();
  console.log(isCheckingIn);
  const [confirmPaid, setConfirmPaid] = useState(false);

  if (isFetching) return <Loader />;
  const {
    id,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    hasBreakfast,
    cabins: cabin,
    guests: guest,
    status,
  } = booking;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const handleConfirm = () => {
    if (!confirmPaid) return;
    checkin(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-amber-100 border border-indigo-100 shadow-sm rounded-2xl px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-900">
              Confirm Check-In —{" "}
              <span className="bg-indigo-100 text-indigo-700 px-1 py-0.5 rounded">
                Booking #{id}
              </span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Review booking details before confirming check-in.
            </p>
          </div>

          <button
            onClick={moveBack}
            className="mt-3 md:mt-0 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-1.5 shadow-sm text-sm"
          >
            <MdArrowBack className="text-base" /> Go Back
          </button>
        </div>

        {/* Booking Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Guest Info */}
          <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 hover:shadow-md transition-all">
            <SectionHeader title="Guest Information" icon={<MdPerson />} />
            <div className="space-y-3 mt-4">
              <Info
                label="Full Name"
                value={guest?.fullName}
                icon={<MdPerson />}
              />
              <Info label="Guests" value={numGuests} icon={<MdPerson />} />
              <Info
                label="Breakfast"
                value={hasBreakfast ? "Yes" : "No"}
                icon={<MdLocalDining />}
                color={hasBreakfast ? "text-green-600" : "text-gray-400"}
              />
            </div>
          </div>

          {/* Booking Info */}
          <div className="bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 hover:shadow-md transition-all">
            <SectionHeader title="Booking Details" icon={<MdApartment />} />
            <div className="space-y-3 mt-4">
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
              <Info label="Nights" value={numNights} icon={<MdEvent />} />
              <Info
                label="Total Price"
                value={`$${totalPrice}`}
                icon={<MdAttachMoney />}
                color="text-green-600"
              />
            </div>
          </div>
        </div>

        {/* Payment confirmation area */}
        <div className="w-full">
          {status === "unconfirmed" && (
            <div className="w-full bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center gap-3">
              <Checkbox
                id={id}
                label={`I confirm that ${
                  guest?.fullName
                } has paid the total amount of ${formatCurrency(totalPrice)}`}
                checked={confirmPaid}
                onChange={() => setConfirmPaid((paid) => !paid)}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-2 justify-end mt-2">
            {status === "unconfirmed" && (
              <button
                onClick={handleConfirm}
                disabled={!confirmPaid || isCheckingIn}
                className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition-all duration-300 font-medium text-sm cursor-pointer ${
                  confirmPaid
                    ? "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <MdCheckCircle className="text-base" /> Confirm Check-In
              </button>
            )}
            <button
              onClick={moveBack}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-1.5 shadow-sm text-sm cursor-pointer"
            >
              <MdArrowBack className="text-base" /> Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, icon }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="p-1.5 bg-indigo-100 rounded text-indigo-600">{icon}</div>
      <h2 className="text-sm font-medium tracking-tight">{title}</h2>
    </div>
  );
}

function Info({ label, value, icon, color = "text-gray-700" }) {
  return (
    <div className="flex items-center justify-between border border-indigo-100 rounded-xl px-3 py-2 hover:bg-indigo-50 transition-all text-sm">
      <div className="flex items-center gap-2">
        <div className={`text-base ${color}`}>{icon}</div>
        <span className="font-normal text-gray-700">{label}</span>
      </div>
      <span className={`font-medium ${color}`}>{value}</span>
    </div>
  );
}

export default CheckinBooking;
