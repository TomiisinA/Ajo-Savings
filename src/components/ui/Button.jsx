/* eslint-disable react/prop-types */
const VARIANT_CLASSES = {
  primary: "bg-primary-100 text-white hover:opacity-90",
  secondary: "bg-white text-primary-200 hover:bg-gray-100",
  outline:
    "bg-transparent border border-primary-100 text-primary-100 hover:bg-primary-100/10",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm font-semibold",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
