import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Loader from "../../ui/Loader";
import {
  MdCalendarToday,
  MdPeople,
  MdAttachMoney,
  MdTimer,
  MdDateRange,
  MdRestaurant,
} from "react-icons/md";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isPending,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  const handleUpdate = (e, field) => {
    const value = e.target.value;
    if (!value || isNaN(value) || value < 0) return;

    updateSetting({ [field]: Number(value) });
  };

  if (isPending) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Update Booking Settings
      </h2>
      <Form>
        <div className="grid grid-cols-1 gap-6">
          <Input
            label="Minimum nights per booking"
            id="min-nights"
            type="number"
            defaultValue={minBookingLength}
            onBlur={(e) => handleUpdate(e, "minBookingLength")}
            disabled={isUpdating}
            icon={<MdCalendarToday className="text-orange-600 text-xl" />}
            className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Input
            label="Maximum nights per booking"
            id="max-nights"
            type="number"
            defaultValue={maxBookingLength}
            onBlur={(e) => handleUpdate(e, "maxBookingLength")}
            disabled={isUpdating}
            icon={<MdDateRange className="text-green-600 text-xl" />}
            className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Input
            label="Maximum guests per booking"
            id="max-guests"
            type="number"
            defaultValue={maxGuestsPerBooking}
            onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
            disabled={isUpdating}
            icon={<MdPeople className="text-indigo-600 text-xl" />}
            className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <Input
            label="Breakfast price (USD)"
            id="breakfast-price"
            type="number"
            defaultValue={breakfastPrice}
            onBlur={(e) => handleUpdate(e, "breakfastPrice")}
            disabled={isUpdating}
            icon={<MdRestaurant className="text-yellow-600 text-xl" />}
            className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </Form>
      {isUpdating && (
        <p className="mt-6 text-sm text-gray-500 text-center animate-pulse">
          Updating settings...
        </p>
      )}
    </div>
  );
}

export default UpdateSettingsForm;
