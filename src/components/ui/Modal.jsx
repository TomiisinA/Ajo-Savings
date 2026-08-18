import { Icon } from "@iconify/react";

// eslint-disable-next-line react/prop-types
const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 w-full">
    <div className="bg-white w-full max-w-md rounded-lg p-6">
      <div className="flex justify-between items-center border-b border-gray-500 mb-6 pb-2">
        <h2 className="text-2xl font-extrabold text-primary-200">{title}</h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="text-black-200 rounded-full hover:text-primary-200"
        >
          <Icon icon="akar-icons:cross" width="20" />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
