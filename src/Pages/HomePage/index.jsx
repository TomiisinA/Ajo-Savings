import Footer from "../../components/Footer/footer";
import { useNavigate } from "react-router";
import { LuShieldCheck } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import FloatingVisual from "../../components/FloatingVisual";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden ">
      {/* ================= HERO SECTION ================= */}
      <section className=" bg-linear-[180deg,white_0%,#F4F1FC_100%] flex flex-col md:flex-row px-6 md:px-10 py-6  min-h-[calc(100vh-80px)]">
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
        <h1 className="heading-xl md:text-[40px] font-bold text-primary-200 ">
          What we do
        </h1>

        <p className="text-lg md:text-xl text-gray-100 my-5">
          Manage every wallet, plan and payout from one clean dashboard — built
          to help you reach the goal you set.
        </p>

        <img src="iPad Pro.png" alt="" className="mx-auto w-auto md:w-full" />
      </section>

      {/* ================= THIRD SECTION ================= */}
      <section className="px-6 md:px-10 py-6 text-center bg-white-100 flex flex-col items-center">
        <h1 className="my-8 heading-xl font-bold text-primary-200">
          How it works
        </h1>

        {/* Circle Image */}
        <div className="relative w-[250px] h-[250px] mb-10">
          <div className="absolute inset-0 bg-[#ff6b52] rounded-full" />
          <img
            src="image 2.png"
            alt=""
            className="relative w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Boxes */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 w-full justify-center">
          <div className="bg-white p-6 text-left w-full md:w-[30%] rounded-lg shadow-md">
            <h2 className="text-primary-200 heading-lg  mb-2">1. Sign up</h2>
            <p className="text-gray-100 text-lg">
              Create an account with us to get with nice features for your
              saving plan.
            </p>
          </div>

          <div className="bg-white p-6 text-left w-full md:w-[30%] rounded-lg shadow-md">
            <h2 className="text-primary-200 heading-lg  mb-2">
              2. Select a Saving plan
            </h2>
            <p className="text-gray-100 text-lg">
              We have three savings plans; Emergency, Flex and Target plan. You
              have access to create more wallets in any currency.
            </p>
          </div>

          <div className="bg-white p-6 text-left w-full md:w-[30%] rounded-lg shadow-md">
            <h2 className="text-primary-200 heading-lg  mb-2">
              3. Manage your Portfolio
            </h2>
            <p className="text-gray-100 text-lg">
              You have access to create more wallets in any currency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOURTH SECTION ================= */}
      <section className="py-6 text-center">
        <h1 className="my-8 heading-xl text-primary-200">What Customers Say</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <img
            src="Rectangle 33.png"
            alt=""
            className="w-full md:w-auto hidden "
          />

          <div className="relative w-[250px] h-[250px]">
            <div className="absolute inset-0 bg-blue rounded-full rounded-tr-none" />
            <img
              src="Rectangle 31.png"
              alt=""
              className="relative w-full h-full object-cover"
            />
          </div>

          <div className="px-6 md:px-10 text-left leading-relaxed max-w-md">
            <img src="quote.png" alt="" className="mb-4" />
            <p className="text-black-300 text-lg">
              MoneyBag, has helped me many times, achieve my saving goal. Guys,
              its simple and fast to use, and it has wonderful saving plans.
            </p>

            <p className="mt-4 font-semibold text-black-300">Laura</p>
            <p className="text-sm text-black-300">Entrepreneur</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
