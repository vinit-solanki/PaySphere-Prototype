import React, { useState, useEffect } from "react";
import axios from "axios";

const Balance = () => {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get("/api/v1/account/balance", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBalance(res.data.balance);
        setError("");
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch balance");
        setBalance(null);
      }
    };
    if (token) fetchBalance();
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900">
        <div className="glass p-8 rounded-xl text-white text-center">
          <p>Please sign in to view your balance.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="glass p-8 rounded-xl shadow-lg text-center text-white max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Your Balance</h2>
        {error ? (
          <p className="text-red-400 mb-4">{error}</p>
        ) : balance !== null ? (
          <p className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            ${balance}
          </p>
        ) : (
          <p className="text-gray-300">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Balance;