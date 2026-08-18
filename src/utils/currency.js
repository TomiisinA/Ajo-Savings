export const formatCurrency = (amount, currency = "NGN") => {
  const symbol = currency === "USD" ? "$" : "₦";
  const value = Number(amount) || 0;
  return `${symbol}${value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
