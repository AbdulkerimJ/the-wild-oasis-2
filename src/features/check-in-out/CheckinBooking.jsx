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
import { useSettings } from "../settings/useSettings";

function CheckinBooking() {
  const { booking, isCheckingBooking } = useBooking();
  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();
  const { settings, isPending: isFetchingSettings } = useSettings();

  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);

  if (isCheckingBooking || isFetchingSettings) return <Loader />;

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

  const optionalBreakfastPrice =
    settings?.breakfastPrice * numNights * numGuests;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const handleConfirm = () => {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        id,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ id, breakfast: {} });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-950 dark:to-gray-900 py-10 px-4 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-amber-100 dark:bg-amber-900/30 border border-indigo-100 dark:border-gray-800 shadow-sm rounded-2xl px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Confirm Check-In —{" "}
              <span className="bg-indigo-100 text-indigo-700 px-1 py-0.5 rounded">
                Booking #{id}
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
              Review booking details before confirming check-in.
            </p>
          </div>

          <button
            onClick={moveBack}
            className="mt-3 md:mt-0 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center gap-1.5 shadow-sm text-sm"
          >
            <MdArrowBack className="text-base" /> Go Back
          </button>
        </div>

        {/* Booking Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Guest Info */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-indigo-100 dark:border-gray-800 shadow-sm p-4 hover:shadow-md transition-all">
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
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-indigo-100 dark:border-gray-800 shadow-sm p-4 hover:shadow-md transition-all">
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

        {/* Payment Confirmation Area */}
        <div className="w-full space-y-4">
          {/* Optional Breakfast Section */}
          {!hasBreakfast && (
            <div className="flex items-center justify-between bg-white dark:bg-gray-900 border border-indigo-100 dark:border-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <MdLocalDining className="text-indigo-600 dark:text-indigo-200 text-lg" />
                </div>
                <Checkbox
                  id={`${id}-breakfast`}
                  label={
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Add breakfast for{" "}
                      <span className="font-semibold text-indigo-600 dark:text-indigo-300">
                        {formatCurrency(optionalBreakfastPrice)}
                      </span>
                    </span>
                  }
                  checked={addBreakfast}
                  onChange={() => {
                    setAddBreakfast((add) => !add);
                    setConfirmPaid(false);
                  }}
                />
              </div>
            </div>
          )}

          {/* Payment Confirmation Section */}
          {status === "unconfirmed" && (
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 border border-indigo-200 dark:border-gray-800 rounded-xl p-5 flex items-center gap-4 shadow-md">
              <div className="p-2 bg-indigo-200 dark:bg-indigo-900 rounded-lg mt-0.5">
                <MdAttachMoney className="text-indigo-700 dark:text-indigo-200 text-xl" />
              </div>
              <Checkbox
                id={`${id}-payment`}
                label={
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                    I confirm that{" "}
                    <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                      {guest?.fullName}
                    </span>{" "}
                    has paid the total amount of{" "}
                    <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                      {formatCurrency(
                        totalPrice + (addBreakfast ? optionalBreakfastPrice : 0)
                      )}
                    </span>
                  </span>
                }
                checked={confirmPaid}
                onChange={() => setConfirmPaid((paid) => !paid)}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            {status === "unconfirmed" && (
              <button
                onClick={handleConfirm}
                disabled={!confirmPaid || isCheckingIn}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ${
                  confirmPaid
                    ? "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <MdCheckCircle className="text-base" />
                Confirm Check-In
              </button>
            )}

            <button
              onClick={moveBack}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm text-sm font-medium transition-colors"
            >
              <MdArrowBack className="text-base" />
              Go Back
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
