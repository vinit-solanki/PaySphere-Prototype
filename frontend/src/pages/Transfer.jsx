import React, { useState } from "react";
import axios from "axios";
import Popup from "../components/Popup";

const Transfer = () => {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const handleConfirm = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        { to, amount: Number(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess(res.data.message);
      setError("");
      setTo("");
      setAmount("");
    } catch (err) {
      setError(err.response?.data?.message || "Transfer failed");
      setSuccess("");
    } finally {
      setIsPopupOpen(false);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="glass p-8 rounded-xl text-white text-center">
          <p>Please sign in to transfer money.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="glass p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Transfer Money</h2>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-400 mb-4 text-center">{success}</p>}
        <input
          type="text"
          placeholder="Recipient User ID"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-6 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <button
          type="submit"
          className="w-full gradient-btn p-3 rounded-lg text-white font-semibold"
        >
          Transfer
        </button>
      </form>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onConfirm={handleConfirm}
        message={`Confirm transfer of $${amount} to user ${to}?`}
      />
    </div>
  );
};

export default Transfer;