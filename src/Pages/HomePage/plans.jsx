import { LuTarget, LuZap } from "react-icons/lu";
import { IoTrendingUpOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export const PaymentPlans = () => {
  const plans = [
    {
      name: "Emergency",
      icon: LuZap,
      tint: "#FB6D4C",
      blurb: "Cash you can reach anytime.",
      points: [
        "Withdraw instantly",
        "No lock-in period",
        "Best for a safety net",
      ],
      featured: false,
    },
    {
      name: "Flex",
      icon: IoTrendingUpOutline,
      tint: "#5d20d2",
      blurb: "Save at your own pace.",
      points: [
        "Top up whenever",
        "Competitive interest",
        "Withdraw with notice",
      ],
      featured: true,
    },
    {
      name: "Target",
      icon: LuTarget,
      tint: "#F4C04E",
      blurb: "Lock money toward a goal.",
      points: [
        "Set an amount & date",
        "Highest interest rate",
        "Stay disciplined",
      ],
      featured: false,
    },
  ];
  return (
    <div>
      {" "}
      <section className="py-20 bg-lav">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="heading-xl text-primary-200 font-extrabold ">
              Pick a plan that fits your goal
            </h1>
            <p className="mt-3 text-black-100 text-lg md:text-xl">
              Three ways to save — from instant access to locked-in growth.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="relative rounded-3xl  shadow-md bg-white p-7  transition-transform hover:-translate-y-1"
                >
                  {p.featured && (
                    <span className="bg-white absolute right-5 top-5 rounded-full px-3 py-1 text-[11px] font-bold text-white">
                      Most popular
                    </span>
                  )}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                    style={{ background: p.tint }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl text-primary-200 font-extrabold">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-black-100">{p.blurb}</p>
                  <ul className="mt-5 space-y-3">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="flex bg-lav text-primary-200 h-5 w-5 items-center justify-center rounded-full">
                          <FaCheck size={10} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-7 block border-gray-200  text-primary-200 border rounded-xl py-3 text-center text-sm font-bold transition-colors"
                    // style={
                    //   p.featured
                    //     ? { background: C.primary, color: "#fff" }
                    //     : { border: `1px solid ${C.border}`, color: C.ink }
                    // }
                  >
                    Choose {p.name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
