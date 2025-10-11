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
      {/* Cabin name */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6  first:pt-0 last:pb-0 border-b border-gray-200 last:border-none">
        <label htmlFor="name" className="font-medium">
          Cabin name
        </label>
        <Input
          type="text"
          id="name"
          register={register}
          rules={{ required: "This field is required." }}
          error={errors?.name?.message}
          disabled={isCreating}
        />
      </div>

      {/* Maximum capacity */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="maxCapacity" className="font-medium">
          Maximum capacity
        </label>
        <Input
          type="number"
          id="maxCapacity"
          register={register}
          rules={{ required: "This field is required." }}
          error={errors?.maxCapacity?.message}
          disabled={isCreating}
        />
      </div>

      {/* Regular price */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="regularPrice" className="font-medium">
          Regular price
        </label>
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

      {/* Discount */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="discount" className="font-medium">
          Discount
        </label>
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

      {/* Description */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="description" className="font-medium">
          Description for website
        </label>
        <Textarea
          id="description"
          defaultValue=""
          register={register}
          rules={{ required: "This field is required." }}
          error={errors?.description?.message}
          disabled={isCreating}
        />
      </div>

      {/* File upload */}
      <div className="grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6 py-3 border-b border-gray-200 last:border-none">
        <label htmlFor="image" className="font-medium">
          Cabin photo
        </label>
        <FileInput
          id="image"
          accept="image/*"
          register={register}
          rules={{ required: "This field is required." }}
          error={errors?.image?.message}
          disabled={isCreating}
        />
      </div>

      {/* Buttons row */}
      <div className="flex justify-end gap-3">
        <Button variation="secondary" type="reset">
          Reset
        </Button>
        <Button disabled={isCreating}>
          {" "}
          {isCreating ? "Adding..." : "Add cabin"}
        </Button>
      </div>
    </Form>
  );
}

export default CreateCabinForm;
