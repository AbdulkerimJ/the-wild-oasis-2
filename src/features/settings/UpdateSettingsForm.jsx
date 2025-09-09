import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Loader from "../../ui/Loader";
import { useSettings } from "./useSettings";

function UpdateSettingsForm() {
  const {isPending, settings: {minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice} = {}} = useSettings();
  if (isPending) return <Loader />;
  return (
    <Form>
      <div className="flex flex-col gap-6 max-w-sm">
        <Input 
          label="Minimum nights/booking"
          id="min-nights"
          type="number"
          defaultValue={minBookingLength}
        />
        <Input 
          label="Maximum nights/booking"
          id="max-nights"
          type="number"
          defaultValue={maxBookingLength}
        />
        <Input 
          label="Maximum guests/booking"
          id="max-guests"
          type="number"
          defaultValue={maxGuestsPerBooking}
        />
        <Input 
          label="Breakfast price"
          id="breakfast-price"
          type="number"
          defaultValue={breakfastPrice}
        />
      </div>
    </Form>
  );
}

export default UpdateSettingsForm;
