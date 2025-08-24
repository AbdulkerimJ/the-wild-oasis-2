import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";

function CreateCabinForm() {

  const {register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Cabin name */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 first:pt-0 last:pb-0 border-b border-gray-200 last:border-none">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <Input type="text" id="name" register= {register} />
      </div>

      {/* Maximum capacity */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <Input type="number" id="maxCapacity" register= {register} />
      </div>

      {/* Regular price */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
        <Input type="number" id="regularPrice" register= {register} />
      </div>

      {/* Discount */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
        <Input type="number" id="discount" defaultValue={0} register= {register} />
      </div>

      {/* Description */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <Textarea id="description" defaultValue="" register={register} />
      </div>

      {/* File upload */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <FileInput id="image" accept="image/*" />
      </div>

      {/* Buttons row */}
      <div className="flex justify-end gap-3 py-3">
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Add cabin</Button>
      </div>
    </Form>
  );
}

export default CreateCabinForm;
