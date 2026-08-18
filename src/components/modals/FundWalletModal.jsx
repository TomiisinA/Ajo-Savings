import { useState } from "react";
import Modal from "../ui/Modal";
import Input from "../ui/Input";
import Button from "../ui/Button";

// eslint-disable-next-line react/prop-types
const FundWalletModal = ({ onClose, onFund }) => {
  const [amount, setAmount] = useState("");

  return (
    <Modal title="Fund Account" onClose={onClose}>
      <label htmlFor="fund-wallet-select" className="text-black-200 pb-4">
        Select Wallet
      </label>
      <select
        id="fund-wallet-select"
        className="w-full border border-gray-500 rounded-md px-4 py-3 mb-4"
      >
        <option value="NGN Wallet">NGN Wallet</option>
        <option value="USD Wallet">USD Wallet</option>
      </select>

      <Input
        label="Enter Amount"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex justify-start gap-3 mb-5">
        <Button onClick={() => onFund(amount)}>Proceed</Button>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default FundWalletModal;
