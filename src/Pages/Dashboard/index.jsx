import { Icon } from "@iconify/react";
import { Table } from "./table";
import { useState } from "react";
import FundWalletModal from "../../components/modals/FundWalletModal";
import WithdrawModal from "../../components/modals/WithdrawModal";
import { BalanceCard } from "../../components/BalanceCard";
import Button from "../../components/ui/Button";
import { formatCurrency } from "../../utils/currency";

const Dashboard = () => {
  const [currency, setCurrency] = useState("NGN");
  const [search, setSearch] = useState("");
  const [isFundOpen, setIsFundOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(12000000.1);

  const handleFund = (amount) => {
    const value = Number(amount);
    if (!value || value <= 0) return;
    setWalletBalance((prev) => prev + value);
    setIsFundOpen(false);
  };

  const handleWithdraw = (amount) => {
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

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
 mb-6"
        >
          <BalanceCard
            title="Wallet Balance"
            amount={formatCurrency(walletBalance, currency)}
            bg="bg-primary-400 text-white"
          />

          <BalanceCard
            title="Emergency Balance"
            amount={formatCurrency(80000.1, currency)}
            bg="bg-yellow text-gray-700"
          />

          <BalanceCard
            title="Flex Balance"
            amount={formatCurrency(20000.1, currency)}
            bg="bg-red text-gray-700"
          />

          <BalanceCard
            title="Target Balance"
            amount={formatCurrency(20000.1, currency)}
            bg="bg-green text-gray-700"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <Button variant="secondary" onClick={() => setIsFundOpen(true)}>
            Fund Wallet
          </Button>

          <Button variant="secondary" onClick={() => setIsWithdrawOpen(true)}>
            Withdraw Funds
          </Button>
        </div>

        <p className="text-sm text-primary-200 cursor-pointer mb-6">
          View Pending Approval
        </p>
        <div>
          <Table search={search} />
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

export default Dashboard;
