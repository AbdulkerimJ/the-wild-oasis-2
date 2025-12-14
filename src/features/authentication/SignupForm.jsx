import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import useSignup from "./useSignup";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";

const SignupForm = () => {
  const { signup, isPending: isSigningUp } = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = ({ fullName, email, password }) => {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      {/* Heading outside the form */}
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Create Employee Account
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-900 p-8 rounded-lg border border-indigo-100 dark:border-gray-700 space-y-6"
      >
        {/* Full Name */}
        <Input
          id="fullName"
          label="Full Name"
          register={register}
          rules={{ required: "Full name is required" }}
          error={errors.fullName?.message}
          placeholder="Enter your full name"
          icon={<MdPerson className="text-blue-500 text-xl" />}
          className="w-full"
          disabled={isSigningUp}
        />

        {/* Email */}
        <Input
          id="email"
          type="email"
          label="Email"
          register={register}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
          error={errors.email?.message}
          placeholder="you@example.com"
          icon={<MdEmail className="text-blue-500 text-xl" />}
          className="w-full"
          disabled={isSigningUp}
        />

        {/* Password */}
        <Input
          id="password"
          type="password"
          label="Password"
          register={register}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "At least 6 characters",
            },
          }}
          error={errors.password?.message}
          placeholder="Enter your password"
          icon={<MdLock className="text-blue-500 text-xl" />}
          className="w-full"
          disabled={isSigningUp}
        />

        {/* Confirm Password */}
        <Input
          id="confirmPassword"
          type="password"
          label="Confirm"
          register={register}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          error={errors.confirmPassword?.message}
          placeholder="Confirm your password"
          icon={<MdLock className="text-blue-500 text-xl" />}
          className="w-full"
          disabled={isSigningUp}
        />

        {/* Buttons */}
        <div className="flex justify-end items-center gap-4 mt-6">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2 rounded-md border border-gray-600 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSigningUp}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 shadow-sm transition-all disabled:cursor-not-allowed disabled:opacity-50"
            disabled={isSigningUp}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
