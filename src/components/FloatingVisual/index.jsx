import { IoWalletOutline, IoTrendingUpOutline } from "react-icons/io5";
import { LuPiggyBank, LuZap } from "react-icons/lu";



const FloatingVisual = () => {
      const pct = 68,
    r = 34,
    circ = 2 * Math.PI * r;
  return (
    <div>
      {" "}
      <div className="relative mx-auto h-[420px] w-full max-w-md">
        {/* ambient blobs */}
        <div className="bg-coral absolute -left-6 top-10 h-24 w-24 rounded-full opacity-30 blur-2xl" />
        <div className=" bg-gold absolute -right-4 bottom-8 h-28 w-28 rounded-full opacity-30 blur-2xl" />

        {/* main balance card */}
        <div className=" bg-linear-[135deg,#5d20d2_50%,#411693_50%] absolute left-4 top-8 w-72 -rotate-6 rounded-3xl p-6 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/70">
              Total balance
            </span>
            <IoWalletOutline size={18} className="text-white/80" />
          </div>
          <p className="mt-3 text-3xl font-extrabold tracking-tight">
            ₦12,000,000
          </p>
          <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-semibold">
            <IoTrendingUpOutline size={12} /> +12.4% this month
          </p>
          <div className="mt-5 flex gap-2">
            <span className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold">
              NGN
            </span>
            <span className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70">
              USD
            </span>
          </div>
        </div>

        {/* savings goal card */}
        <div className="absolute bottom-4 right-2 w-60 rotate-[5deg] rounded-3xl border border-0 bg-white p-5 shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative h-20 w-20">
              <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r={r}
                  fill="none"
                  stroke="#EDE9FE"
                  strokeWidth="8"
                />
                <circle
                  cx="40"
                  cy="40"
                  r={r}
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circ}
                  strokeDashoffset={circ - (pct / 100) * circ}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-extrabold">
                {pct}%
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400">Target plan</p>
              <p className="text-sm font-bold">New car fund</p>
              <p className="mt-1 text-xs font-semibold text-green">
                ₦3.4M / ₦5M
              </p>
            </div>
          </div>
        </div>

        {/* floating accents */}
        <div className=" bg-coral absolute right-0 top-4 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg">
          <LuPiggyBank size={22} />
        </div>
        <div className=" bg-gold absolute -left-2 bottom-24 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg">
          <LuZap size={18} />
        </div>
      </div>
    </div>
  );
}

export default FloatingVisual

