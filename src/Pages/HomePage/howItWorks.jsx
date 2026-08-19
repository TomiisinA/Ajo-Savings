export const HowItWorks = () => {
  const steps = [
    {
      n: "01",
      title: "Sign up",
      body: "Create your account in minutes and verify your identity.",
    },
    {
      n: "02",
      title: "Choose a plan",
      body: "Pick Emergency, Flex or Target — in Naira or Dollars.",
    },
    {
      n: "03",
      title: "Grow your portfolio",
      body: "Add wallets, automate deposits and track every payout.",
    },
  ];
  return (
    <div className=" bg-white-000">
      <section className="px-6 md:px-10 py-6 flex flex-col ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="heading-xl mt-4 font-bold text-primary-200">
            How it works
          </h1>
          <p className="mt-3 text-center text-black-100 text-lg md:text-xl">
            Three steps between you and your next savings goal.
          </p>
        </div>
        {/* Boxes */}

        <div className="mt-12 gap-3 grid md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className=" rounded-3xl border-gray-100 shadow-sm bg-white p-7 "
            >
              <div className="flex h-12  text-primary-200 bg-lav w-12 items-center justify-center rounded-2xl text-lg font-extrabold">
                {s.n}
              </div>
              <h3 className="mt-3 text-xl text-primary-200 font-extrabold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm  text-black-100">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
