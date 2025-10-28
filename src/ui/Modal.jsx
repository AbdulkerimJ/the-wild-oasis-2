import React from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-start md:items-center justify-center z-50 p-4 overflow-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-blue-50 p-6 md:p-8 rounded-sm shadow-sm w-full max-w-3xl max-h-[85vh] overflow-auto relative transition-all duration-200 border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        {children}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label="Close modal"
        >
          <HiXMark className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
