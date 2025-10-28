import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import useCreateCabin from "./useCreateCabin";

function CreateCabinForm({ onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const { isCreating, createCabin } = useCreateCabin();
  const onSubmit = (data) => {
    createCabin(
      {
        ...data,
        discount: data.discount ? Number(data.discount) : 0,
        image: data.image[0],
      },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Add new cabin</h3>
        <p className="text-sm text-gray-500">
          Create a cabin listing that will appear on the website.
        </p>
      </div>

      <div className="space-y-4">
        {/* Cabin name */}
        <div className="md:grid md:grid-cols-3 md:items-center gap-4 py-2 border-b border-gray-100">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Cabin name
          </label>
          <div className="md:col-span-2">
            <Input
              type="text"
              id="name"
              register={register}
              rules={{ required: "This field is required." }}
              error={errors?.name?.message}
              disabled={isCreating}
            />
          </div>
        </div>

        {/* Maximum capacity */}
        <div className="md:grid md:grid-cols-3 md:items-center gap-4 py-2 border-b border-gray-100">
          <label
            htmlFor="maxCapacity"
            className="text-sm font-medium text-gray-700"
          >
            Maximum capacity
          </label>
          <div className="md:col-span-2">
            <Input
              type="number"
              id="maxCapacity"
              register={register}
              rules={{ required: "This field is required." }}
              error={errors?.maxCapacity?.message}
              disabled={isCreating}
            />
          </div>
        </div>

        {/* Regular price */}
        <div className="md:grid md:grid-cols-3 md:items-center gap-4 py-2 border-b border-gray-100">
          <label
            htmlFor="regularPrice"
            className="text-sm font-medium text-gray-700"
          >
            Regular price
          </label>
          <div className="md:col-span-2">
            <Input
              type="number"
              id="regularPrice"
              register={register}
              rules={{
                required: "This field is required.",
                min: { value: 1, message: "Price must be at least 1" },
              }}
              error={errors?.regularPrice?.message}
              disabled={isCreating}
            />
          </div>
        </div>

        {/* Discount */}
        <div className="md:grid md:grid-cols-3 md:items-center gap-4 py-2 border-b border-gray-100">
          <label
            htmlFor="discount"
            className="text-sm font-medium text-gray-700"
          >
            Discount
          </label>
          <div className="md:col-span-2">
            <Input
              type="number"
              id="discount"
              register={register}
              rules={{
                validate: (value) =>
                  value * 1 <= getValues("regularPrice") ||
                  "Discount must be less than or equal to regular price",
              }}
              error={errors?.discount?.message}
              disabled={isCreating}
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:grid md:grid-cols-3 md:items-start gap-4 py-2 border-b border-gray-100">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description for website
          </label>
          <div className="md:col-span-2">
            <Textarea
              id="description"
              defaultValue=""
              register={register}
              rules={{ required: "This field is required." }}
              error={errors?.description?.message}
              disabled={isCreating}
            />
          </div>
        </div>

        {/* File upload */}
        <div className="md:grid md:grid-cols-3 md:items-center gap-4 py-2 border-b border-gray-100">
          <label htmlFor="image" className="text-sm font-medium text-gray-700">
            Cabin photo
          </label>
          <div className="md:col-span-2">
            <FileInput
              id="image"
              accept="image/*"
              register={register}
              rules={{ required: "This field is required." }}
              error={errors?.image?.message}
              disabled={isCreating}
            />
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="secondary" type="reset" disabled={isCreating}>
            Reset
          </Button>
          <Button type="submit" disabled={isCreating}>
            {isCreating ? "Adding..." : "Add cabin"}
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default CreateCabinForm;
