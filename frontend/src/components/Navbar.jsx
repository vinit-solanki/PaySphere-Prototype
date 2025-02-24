import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="glass fixed top-0 w-full glass p-4 text-white flex justify-between items-center z-10">
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        PaySphere
      </div>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-blue-300 transition-colors duration-300">Dashboard</Link>
        <Link to="/balance" className="hover:text-blue-300 transition-colors duration-300">Balance</Link>
        <Link to="/transfer" className="hover:text-blue-300 transition-colors duration-300">Transfer</Link>
        {token ? (
          <button
            onClick={handleLogout}
            className="gradient-btn px-4 py-2 rounded-lg text-white font-semibold"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/signin" className="hover:text-blue-300 transition-colors duration-300">Sign In</Link>
            <Link
              to="/signup"
              className="gradient-btn px-4 py-2 rounded-lg text-white font-semibold"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;