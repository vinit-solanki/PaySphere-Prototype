import React from "react";

const Popup = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
      <div className="glass p-6 rounded-xl shadow-lg transform transition-all duration-300 scale-100 hover:scale-105">
        <p className="text-white text-lg mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="gradient-btn px-4 py-2 rounded-lg text-white font-semibold"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;