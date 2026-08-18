// eslint-disable-next-line react/prop-types
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg p-6 ${className}`}>{children}</div>
);

export default Card;
