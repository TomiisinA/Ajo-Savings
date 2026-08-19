import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router";
import { LuShieldCheck } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import FloatingVisual from "../../components/FloatingVisual";
import { PaymentPlans } from "./plans";
import { HowItWorks } from "./howItWorks";
import { Testimonials } from "./testimonials";
import { Cta } from "./cta";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden ">
      {/* ================= HERO SECTION ================= */}
      <section className=" mx-auto bg-linear-[180deg,white_0%,#F4F1FC_100%] flex flex-col md:flex-row px-6 md:px-10 py-6  min-h-[calc(100vh-80px)] ">
        {/* Text */}
        <div className="flex-3 flex items-center">
          <div className="flex flex-col justify-center gap-12 pr-0 md:pr-24">
            <div className="border border-gray-200 rounded-full px-4 py-2 w-fit flex items-center gap-2">
              <p className="text-primary-100 text-sm flex items-center gap-2">
                <LuShieldCheck />
                Bank-grade security
              </p>
            </div>
            <h1 className="heading-hero font-bold text-primary-200 ">
              Unlock your Financial Future.{" "}
              <span className="text-primary-100">Save smarter</span>
            </h1>

            <p className="text-2xl md:text-xl text-gray-100 l">
              A seamless, secure way for businesses and individuals to save in
              Naira or Dollars — set a goal, pick a plan, and watch your money
              grow.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <button
                onClick={() => navigate("/SignUp", { replace: true })}
                className=" flex  gap-2 bg-primary-100 text-white text-lg px-4 py-3 rounded-xl hover:opacity-90 transition"
              >
                Get Started
                <FaArrowRight className="h-6" />
              </button>
              <button
                onClick={() => navigate("/SignUp", { replace: true })}
                className=" flex  gap-2 bg-white shadow-gray-50 shadow-sm text-black-100 text-lg px-4 py-3 rounded-xl hover:opacity-90 transition"
              >
                See the Plans
              </button>
            </div>

            <div className="mt-8 flex items-center gap-6 ">
              {[
                ["25k+", "Savers"],
                ["₦4.2B", "Saved"],
                ["4.9★", "App rating"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-lg font-extrabold text-primary-200">{n}</p>
                  <p className="text-xs font-medium text-gray-400">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-2 flex items-center justify-center mt-10 md:mt-0">
          <FloatingVisual />
        </div>
      </section>

      {/* ================= SECOND SECTION ================= */}
      <section className="mx-6 pt-6 text-center w-full">
        <h1 className=" mt-4 heading-xl md:text-[40px] font-bold text-primary-200 ">
          What we do
        </h1>

        <p className="text-lg md:text-xl text-gray-100 my-5">
          Manage every wallet, plan and payout from one clean dashboard 
        </p>

        <img src="iPad Pro.png" alt="" className="mx-auto w-auto md:w-full" />
      </section>
      {/* ================= THIRD SECTION ================= */}
      <div>
        <PaymentPlans />
      </div>
      {/* ================= FOURTH SECTION ================= */}
      <div>
        <HowItWorks />
      </div>
      {/* ================= FIFTH SECTION ================= */}
      <div>
        <Testimonials />
      </div>
      {/* ================= SIXTH SECTION ================= */}
      <div>
        <Cta />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
