import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Loader from "../../ui/Loader";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {isPending, settings: {minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice} = {}} = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();
  const handleUpdate = (e, field) => {
    const value = e.target.value;
    if(!value || isNaN(value) || value < 0) return;

    updateSetting({ [field]: Number(value) });
  };



  if (isPending) return <Loader />;
  return (
    <Form>
      <div className="flex flex-col gap-6 max-w-sm">
        <Input 
          label="Minimum nights/booking"
          id="min-nights"
          type="number"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isUpdating}
        />
        <Input 
          label="Maximum nights/booking"
          id="max-nights"
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isUpdating}
        />
        <Input 
          label="Maximum guests/booking"
          id="max-guests"
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
        />
        <Input 
          label="Breakfast price"
          id="breakfast-price"
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isUpdating}
        />
      </div>
    </Form>
  );
}

export default UpdateSettingsForm;
