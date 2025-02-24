import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900">
        <div className="glass p-8 rounded-xl text-center text-white">
          <h2 className="text-2xl mb-4">Please sign in to access the dashboard</h2>
          <Link to="/signin" className="gradient-btn px-6 py-3 rounded-lg text-white font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen pt-20 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Welcome to PaySphere</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/balance" className="glass p-6 rounded-xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold">Check Balance</h3>
            <p className="text-gray-300 mt-2">View your current account balance.</p>
          </Link>
          <Link to="/transfer" className="glass p-6 rounded-xl hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold">Transfer Money</h3>
            <p className="text-gray-300 mt-2">Send money to other users securely.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;