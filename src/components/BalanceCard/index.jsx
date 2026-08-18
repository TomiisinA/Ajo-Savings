import { Icon } from "@iconify/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const BalanceCard = ({ title, amount, bg }) => {
  const [hideBalance, setHideBalance] = useState(false);

  return (
    <div className={`rounded-lg p-6 ${bg}`}>
      <p className="text-xl font-bold flex items-center justify-between">
        {hideBalance ? "••••••" : amount}
        <button
          type="button"
          onClick={() => setHideBalance(!hideBalance)}
          aria-label={hideBalance ? "Show balance" : "Hide balance"}
        >
          <Icon icon="clarity:eye-hide-line" width="22" />
        </button>
      </p>
      <p className="font-extrabold mt-2">{title}</p>
    </div>
  );
};

export default BalanceCard;
