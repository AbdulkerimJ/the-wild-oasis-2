import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";

import useUpdateUser from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdatingUser } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-lg font-medium mb-4">Update Password</h3>
      <Input
        label="New Password"
        type="password"
        id="password"
        autoComplete="current-password"
        disabled={isUpdatingUser}
        register={register}
        rules={{
          required: "This field is required",
          minLength: {
            value: 6,
            message: "Password needs a minimum of 6 characters",
          },
        }}
        error={errors?.password}
      />

      <Input
        label="Confirm Password"
        type="password"
        id="passwordConfirm"
        autoComplete="new-password"
        disabled={isUpdatingUser}
        register={register}
        rules={{
          required: "This field is required",
          validate: (value) =>
            getValues().password === value || "Passwords need to match",
        }}
        error={errors?.passwordConfirm}
      />
      <div className="w-full flex justify-end gap-2">
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdatingUser}>Update password</Button>
      </div>
    </Form>
  );
}

export default UpdatePasswordForm;
