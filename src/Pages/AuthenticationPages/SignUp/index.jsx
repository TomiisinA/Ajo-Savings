import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import FloatingVisual from "../../../components/FloatingVisual";
import { User, Mail, Lock, Globe, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));

    //  alert("Account created successfully!");
    navigate("/dashboard");
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        {/* ================= LEFT / FORM ================= */}
        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-md">
            <div>
              <img src="logo.png" alt="Logo" className="w-40 h-auto" />
            </div>
            <div className=" p-6">
              <h1 className="heading-xl text-primary-200 font-bold mb-2">
                Create Account
              </h1>
              <p className="mt-2 text-md text-black-100">
                Start saving smarter in under two minutes.
              </p>

              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
                >
                  {/* First Name */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="text-lg font-bold text-black-100 mb-1">
                        First Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          {...register("firstName", {
                            required: "Enter first name",
                          })}
                          type="text"
                          placeholder="John"
                          className="h-12 w-full pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                        />
                      </div>
                      {errors.firstName && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                      <label className="text-lg text-black-100 mb-1">
                        Last Name
                      </label>
                      <div className="relative">
                        <User
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />
                        <input
                          {...register("lastName", {
                            required: "Enter last name",
                          })}
                          type="text"
                          placeholder="Doe"
                          className="h-12 w-full pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                        />
                      </div>
                      {errors.lastName && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-lg text-black-100 mb-1">Email</label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        {...register("email", {
                          required: "Email is required",
                          validate: (value) =>
                            value.includes("@") || "Enter a valid email",
                        })}
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 w-full pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col">
                    <label className="text-lg text-black-100 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Minimum 6 characters",
                          },
                        })}
                        type="password"
                        placeholder="••••••••"
                        className="h-12 w-full pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>
                    {errors.password && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  {/* Country */}
                  <div className="flex flex-col">
                    <label className="text-lg text-black-100 mb-1">
                      Country
                    </label>
                    <div className="relative">
                      <Globe
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        placeholder="Nigeria"
                        className="h-12 w-full pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      />
                    </div>
                  </div>

                  {/* Submit */}

                  <button
                    onClick={() => setAgree(!agree)}
                    className="flex items-start gap-2 text-left text-sm text-gray-600"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors"
                      style={{
                        borderColor: agree ? "#6D28D9" : "#D1D5DB",
                        background: agree ? "#6D28D9" : "#fff",
                      }}
                    >
                      {agree && <Check size={13} className="text-white" />}
                    </span>
                    <span>
                      I agree to MoneyBags{" "}
                      <a href="#" className="font-semibold">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="font-semibold">
                        Privacy Policy
                      </a>
                      .
                      <a href="#" className="font-semibold">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="font-semibold">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </button>

                  <button
                    disabled={!agree}
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-sm transition-all"
                    style={{
                      background: agree ? "#6D28D9" : "#C4B5FD",
                      cursor: agree ? "pointer" : "not-allowed",
                    }}
                  >
                    Create account <ArrowRight size={16} />
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="h-px flex-1 bg-gray-500" />
                    <span className="text-xs font-medium text-gray-400">
                      or
                    </span>
                    <span className="h-px flex-1 bg-gray-500" />
                  </div>

                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border bg-white py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                    <svg width="16" height="16" viewBox="0 0 48 48">
                      <path
                        fill="#FFC107"
                        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C41.4 35.6 44 30.3 44 24c0-1.3-.1-2.3-.4-3.5z"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                </form>
                <p className="mt-8 text-center text-sm text-black-100">
                  Already have an account?{" "}
                  <a href="#" className="font-bold text-primary-200">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT / IMAGE ================= */}
        <div
          className="relative hidden flex-1 items-center justify-center overflow-hidden p-10 lg:flex"
          style={{
            background: `linear-gradient(160deg, #EDE9FE 0%, #E4DBFB 60%, #D9CBF9 100%)`,
          }}
        >
          <div className="relative w-full max-w-md">
            <FloatingVisual />
            <div className="mt-14 text-center">
              <h2 className=" text-primary-200 text-2xl font-extrabold tracking-tight">
                Join 25,000+ smart savers
              </h2>
              <p className="mx-auto mt-2 max-w-xs text-sm text-gray-600">
                Open Naira and Dollar wallets, set a goal, and let MoneyBag help
                you reach it.
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                {[
                  ["25k+", "Savers"],
                  ["₦4.2B", "Saved"],
                  ["4.9★", "Rating"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className=" text-primary-200 text-lg font-extrabold">
                      {n}
                    </p>
                    <p className="text-xs font-medium text-gray-500">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
