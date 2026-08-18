import { Icon } from "@iconify/react";
import { useState } from "react";
import { BalanceCard } from "../../components/BalanceCard";
import Button from "../../components/ui/Button";
import FundWalletModal from "../../components/modals/FundWalletModal";
import WithdrawModal from "../../components/modals/WithdrawModal";
import { formatCurrency } from "../../utils/currency";

export const MyWallet = () => {
  const [currency, setCurrency] = useState("NGN");
  const [search, setSearch] = useState("");
  const [isFundOpen, setIsFundOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(12000000.1);

  const handleFund = (amount: string) => {
    const value = Number(amount);
    if (!value || value <= 0) return;
    setWalletBalance((prev) => prev + value);
    setIsFundOpen(false);
  };

  const handleWithdraw = (amount: string) => {
    const value = Number(amount);
    if (!value || value <= 0) return;
    if (value > walletBalance) {
      alert("Insufficient balance");
      return;
    }
    setWalletBalance((prev) => prev - value);
    setIsWithdrawOpen(false);
  };

  return (
    <div className=" m-6  ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-extrabold">Hello, Shina</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md bg-white p-2 text-sm border-none shadow-lg outline-none"
          />
          <p className="ml-2 border text-xl rounded-lg bg-white border-none p-1">
            <Icon icon="mdi:bell-outline" width="24" height="24" />
          </p>
          <p className="ml-2 border text-xl  font-bold border-none rounded-lg bg-primary-300 p-1">
            WS
          </p>
          <p className="ml-2 text-lg font-medium">Wasiu Shina </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-end items-center gap-4 mb-8 ">
          {["NGN", "USD"].map((cur) => (
            <label key={cur} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={currency === cur}
                onChange={() => setCurrency(cur)}
              />
              <span>{cur}</span>
            </label>
          ))}
        </div>

        <div className="border bg-primary-600 rounded-lg p-6 border-none w-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4
 mb-6"
          >
            <div className="w-auto">
              <BalanceCard
                title="Total Amount"
                amount={formatCurrency(walletBalance, currency)}
                bg="bg-primary-400 text-white "
              />

              <div className="flex gap-4 mb-4 pt-4">
                <Button
                  variant="secondary"
                  onClick={() =>
                    alert("Multiple wallets are coming soon.")
                  }
                >
                  Create New Wallet
                </Button>
                <Button variant="secondary" onClick={() => setIsFundOpen(true)}>
                  Fund Wallet
                </Button>

                <Button
                  variant="secondary"
                  onClick={() => setIsWithdrawOpen(true)}
                >
                  Withdraw
                </Button>
              </div>
            </div>
            <div className=" bg-white rounded-lg p-4  ">
              <p className="text-primary-200"> Recent Transactions</p>
              <div className="  rounded-md text-grey-400 p-4 mt-4 bg-primary-600">
                <div className="border-b border-gray-400 border-0  pb-4 mb-3">
                  <p className="flex justify-between pb-2">
                    {" "}
                    You withdrew <span>N10,000.00 </span>
                  </p>
                  <p className="text-sm"> Feb 04 at 8: 00pm</p>
                </div>
                <div className="border-b border-gray-400 border-0  pb-4 mb-3">
                  <p className="flex justify-between pb-2">
                    {" "}
                    You withdrew <span>N10,000.00 </span>
                  </p>
                  <p className="text-sm"> Feb 04 at 8: 00pm</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-primary-200 cursor-pointer mb-6">
            Direct Wallet Top-up
          </p>
        </div>
      </div>
      {isFundOpen && (
        <FundWalletModal onClose={() => setIsFundOpen(false)} onFund={handleFund} />
      )}
      {isWithdrawOpen && (
        <WithdrawModal
          onClose={() => setIsWithdrawOpen(false)}
          onWithdraw={handleWithdraw}
        />
      )}
    </div>
  );
};
