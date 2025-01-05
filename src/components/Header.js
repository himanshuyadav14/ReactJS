import React, { useState } from "react";
import { LOGO_URL } from "/src/config";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/" className="flex items-center">
    <img src={LOGO_URL} alt="Logo" className="h-10 w-10 object-cover" />
    <span className="ml-3 font-bold text-gray-800">FoodCart</span>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Title />

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-blue-600 transition">Contact</Link>
            </li>
            <li>
              <Link to="/instamart" className="font-bold text-blue-600 hover:underline">Instamart</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-600 transition">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* Authentication Button */}
        <div>
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
