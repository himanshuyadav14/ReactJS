import React, { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/" className="flex items-center">
    <img data-testid="logo" src={Logo} alt="logo" className="h-14 w-20 object-cover" />
    <span className="ml-3 font-bold text-gray-800">FoodCart</span>
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the side menu

  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart);
  const cartLength = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  console.log(user);

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Title />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/instamart"
                className="font-bold text-blue-600 hover:underline"
              >
                GroceryHub
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-600 transition">
                Cart - {cartLength}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Authentication Button */}
        <div className="hidden md:block">
          <span className="font-bold mx-4">{user.name}</span>
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Side Menu (Mobile View) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="absolute left-0 top-0 w-64 bg-white h-full shadow-lg z-50 transform transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <Title />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="space-y-6 px-4 py-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-700 font-medium hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-gray-700 font-medium hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-gray-700 font-medium hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/instamart"
                  className="block text-blue-600 font-bold hover:underline transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GroceryHub
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block text-gray-700 font-medium hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart - {cartLength}
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
