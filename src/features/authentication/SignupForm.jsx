import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import useSignup from "./useSignup";

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white backdrop-blur-md p-8 rounded-sm border border-gray-100 space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
        Create Your Account
      </h2>

      {/* Full Name */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="fullName"
          className="w-1/3 text-right text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <Input
          id="fullName"
          register={register}
          rules={{ required: "Full name is required" }}
          error={errors.fullName?.message}
          placeholder="Enter your full name"
          className="flex-1"
          disabled = {isSigningUp}
        />
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="email"
          className="w-1/3 text-right text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
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
          className="flex-1"
          disabled = {isSigningUp}
        />
      </div>

      {/* Password */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="password"
          className="w-1/3 text-right text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <Input
          id="password"
          type="password"
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
          className="flex-1"
          disabled = {isSigningUp}
        />
      </div>

      {/* Confirm Password */}
      <div className="flex items-center gap-4">
        <label
          htmlFor="confirmPassword"
          className="w-1/3 text-right text-sm font-medium text-gray-700"
        >
          Confirm
        </label>
        <Input
          id="confirmPassword"
          type="password"
          register={register}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          error={errors.confirmPassword?.message}
          placeholder="Confirm your password"
          className="flex-1"
          disabled = {isSigningUp}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <button
          type="button"
          onClick={handleCancel}
          className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all disabled:cursor-not-allowed disabled:opacity-50"
          disabled = {isSigningUp}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all disabled:cursor-not-allowed disabled:opacity-50"
          disabled = {isSigningUp}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
