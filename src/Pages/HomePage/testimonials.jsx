import { BsStarFill } from "react-icons/bs";

export const Testimonials = () => {
  const items = [
    {
      quote:
        `"MoneyBag helped me hit my savings goal for the first time. Simple, fast, and the plans just make sense."`,
      name: "Laura A.",
      role: "Entrepreneur",
    },
    {
      quote:
        `"I run payroll savings for my team across Naira and Dollar wallets. The dashboard makes it effortless."`,
      name: "Emeka O.",
      role: "Business owner",
    },
    {
      quote:
        `"The Target plan kept me disciplined. Locked my rent money and actually watched it grow."`,
      name: "Fatima B.",
      role: "Product designer",
    },
  ];
  return (
    <section className="py-20 bg-lav">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center text-primary-200 text-3xl font-extrabold tracking-tight sm:text-4xl">
          What customers say
        </h2>
        <div className="mt-12 grid gap-6 ">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border-0 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <BsStarFill key={i} size={16} fill="#F4C04E" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{t.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 bg-primary-100 items-center justify-center rounded-full text-sm font-extrabold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm text-primary-500 font-extrabold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
