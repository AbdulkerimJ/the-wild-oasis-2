import { useState } from "react";
import { useLogin } from "./useLogin";
import { MdEmail, MdLock } from "react-icons/md";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending: isLoggingIn } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-8 sm:px-6">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-800 rounded-md shadow-lg overflow-hidden">
        {/* Image / Branding Section */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-gray-900 p-6 md:p-10">
          <img
            src="/logo-dark.png"
            alt="Company Logo"
            className="w-40 sm:w-56 md:w-64 h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Login Form Section */}
        <div className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-6 sm:mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} autoComplete="on" className="space-y-4 sm:space-y-6">
            {/* Email */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-3.5 text-gray-400 text-lg sm:text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-100 focus:ring-2 focus:ring-emerald-500 transition"
                required
                disabled={isLoggingIn}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <MdLock className="absolute left-3 top-3.5 text-gray-400 text-lg sm:text-xl" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-100 focus:ring-2 focus:ring-emerald-500 transition"
                required
                disabled={isLoggingIn}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 sm:py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
