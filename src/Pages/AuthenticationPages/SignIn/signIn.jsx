import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ArrowRight, ShieldCheck, Check, Mail, Lock } from "lucide-react";
import FloatingVisual from "../../../components/FloatingVisual";

/* ---- Brand tokens (preserved from the live MoneyBag site) ---- */
const C = {
  primary: "#6D28D9",
  bright: "#7C3AED",
  soft: "#9F67F5",
  ink: "#2E1065",
  lav: "#F4F1FC",
  lav2: "#EDE9FE",
  coral: "#FB6D4C",
  gold: "#F4C04E",
  border: "#ECE7FA",
  green: "#16A34A",
};

export default function SignIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log("Login Data:", data);
    // navigate("/dashboard");

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please sign up.");
      return;
    }

    if (
      data.email === savedUser.email &&
      data.password === savedUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };
  // const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row">
        {/* ---------- Left: form ---------- */}
        <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
          <div className="w-full max-w-sm">
            {/* logo */}
            <div className="flex items-center gap-2">
              <div className="flex  items-center justify-center rounded-xl text-white">
                <Link to="/">
                  <img src="logo.png" alt="MoneyBag" className="w-30 h-auto" />
                </Link>
              </div>
            </div>

            <h1 className="text-primary-200 mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-black-100">
              Log in to keep growing your savings.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
                    placeholder="********"
                    className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setRemember(!remember)}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-md border transition-colors"
                    style={{
                      borderColor: remember ? C.primary : C.border,
                      background: remember ? C.primary : "#fff",
                    }}
                  >
                    {remember && <Check size={13} className="text-white" />}
                  </span>
                  Keep me signed in
                </button>
                <a href="#" className="text-sm font-semibold text-primary-200">
                  Forgot password?
                </a>
              </div>

              <button className="bg-primary-100 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5">
                Log in <ArrowRight size={16} />
              </button>

              {/* divider */}
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-gray-500" />
                <span className="text-xs font-medium text-gray-400">or</span>
                <span className="h-px flex-1 bg-gray-500" />
              </div>

              <button className="flex w-full border-gray-500 items-center justify-center gap-2 rounded-xl border bg-white py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
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
                Continue with Google
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-black-100">
              Don’t have an account?{" "}
              <a href="#" className="font-bold text-primary-200">
                Sign up
              </a>
            </p>
            <div className="mt-3 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-600"
              >
                <ShieldCheck size={13} /> Log in as admin
              </a>
            </div>
          </div>
        </div>

        {/* ---------- Right: brand panel ---------- */}
        <div
          className="relative hidden flex-1 items-center justify-center overflow-hidden p-10 lg:flex"
          style={{
            background: `linear-gradient(160deg, ${C.lav2} 0%, #E4DBFB 60%, #D9CBF9 100%)`,
          }}
        >
          <div className="relative w-full max-w-md">
            <FloatingVisual />
            <div className="mt-14 text-center">
              <h2 className="text-2xl text-primary-500 font-extrabold tracking-tight">
                Save smarter, reach every goal
              </h2>
              <p className="mx-auto mt-2 max-w-xs text-sm text-gray-100">
                Track your wallets, automate deposits, and watch your money grow
                — all in one place.
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm">
                {[
                  ["25k+", "Savers"],
                  ["₦4.2B", "Saved"],
                  ["4.9★", "Rating"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-lg text-primary-500 font-extrabold">
                      {n}
                    </p>
                    <p className="text-xs font-medium text-gray-100">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
