import React, { useState } from "react";
import { useLogin } from "./useLogin";
import { MdEmail, MdLock } from "react-icons/md";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending: isLoggingIn } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    // ✅ Don't reset fields immediately — wait for redirect or success
    login({ email, password });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-800 rounded-md shadow-md overflow-hidden relative z-10">
        {/* Image Section */}
        <div className="md:w-1/2 flex items-center justify-center bg-gray-900 p-10">
          <img
            src="/logo-dark.png" // replace with your logo
            alt="Company Logo"
            className="w-64 h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Login Form Section */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Welcome Back
          </h2>

          {/* ✅ Added autoComplete="on" for the form */}
          <form onSubmit={handleSubmit} autoComplete="on" className="space-y-6">
            {/* Email */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="email"
                name="email" // ✅ important for browser autofill
                placeholder="Email address"
                autoComplete="username" // ✅ recognized by browsers
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 pl-10 pr-4 py-2.5 text-sm text-gray-100 focus:ring-2 focus:ring-emerald-500 transition"
                required
                disabled={isLoggingIn}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <MdLock className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="password"
                name="password" // ✅ required for browser autofill
                placeholder="Password"
                autoComplete="current-password" // ✅ for login (not signup)
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 pl-10 pr-4 py-2.5 text-sm text-gray-100 focus:ring-2 focus:ring-emerald-500 transition"
                required
                disabled={isLoggingIn}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
