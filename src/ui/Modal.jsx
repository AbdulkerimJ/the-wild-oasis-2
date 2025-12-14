import React from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = ({ onClose, children, title }) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm flex items-start md:items-center justify-center z-50 p-4 overflow-auto"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose?.();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        className="bg-blue-50 dark:bg-gray-900 p-6 md:p-8 rounded-sm shadow-sm dark:shadow-md w-full max-w-3xl max-h-[85vh] overflow-auto relative transition-all duration-200 border border-gray-100 dark:border-gray-800 text-gray-900 dark:text-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2
            id="modal-title"
            className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100"
          >
            {title}
          </h2>
        )}
        {/* Content */}
        {children}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-100 rounded-full shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500"
          aria-label="Close modal"
        >
          <HiXMark className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
