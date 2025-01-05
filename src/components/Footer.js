import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div>
            <h1 className="text-xl font-bold mb-4">FoodCart</h1>
            <p className="text-gray-400">
              FoodCart is a leading platform offering the best services to
              cater to all your needs. Follow us for updates and news.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} FoodCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
