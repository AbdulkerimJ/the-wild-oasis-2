import React from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = ({ onClose, children }) => {
  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-auto "
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-2xl shadow-2xl w-[90vw] max-w-6xl max-h-[85vh] overflow-auto relative transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        {children}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl leading-none bg-transparent border-none cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full p-1"
          aria-label="Close modal"
        >
          <HiXMark />
        </button>
      </div>
    </div>
  );
};

export default Modal;
