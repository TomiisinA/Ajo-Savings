
import { FaArrowRight } from "react-icons/fa6";

export const Cta = () => {
  return (
    <div>
      {" "}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div
          className="bg-linear-[135deg,var(--color-primary),var(--color-bright)_60%,var(--color-soft)] relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-lg"
         
        >
          <div
            className="bg-gold absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-20"
           
          />
          <div
            className=" bg-coral absolute -bottom-10 -left-6 h-44 w-44 rounded-full opacity-20"
          
          />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Start saving smarter today
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Join 25,000+ people building their financial future with MoneyBag.
            </p>
            <a
              href="#"
              className="text-primary-200 mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold"
            
            >
              Create free account <FaArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
