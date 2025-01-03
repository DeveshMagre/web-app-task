import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isProfileRoute = location.pathname === "/profile";

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-gray-100">
      <div className="text-2xl font-bold tracking-wide flex justify-center items-center">
        <Link to="/">LOGO</Link>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            to="/business"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Business
          </Link>
          <Link
            to="/users"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Users
          </Link>
          <Link
            to="/terms-and-conditions"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/pricing"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Pricing
          </Link>
        </div>

        {/* Profile or Logout Button */}
        <div className="hidden md:flex">
          {isProfileRoute ? (
            <button
              onClick={() => console.log("Logout clicked")}
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/profile"
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Profile
            </Link>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-100 hover:text-gray-300 transition"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-700 to-blue-900 relative">
          <div className="flex flex-col space-y-6 px-6 py-4">
            <Link
              to="/business"
              className="text-lg hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Business
            </Link>
            <Link
              to="/users"
              className="text-lg hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Users
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-lg hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
            <Link
              to="/pricing"
              className="text-lg hover:text-gray-300 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>

          {/* Profile Button in Top Right Corner */}
          <div className="absolute top-4 right-4">
            {isProfileRoute ? (
              <button
                onClick={() => console.log("Logout clicked")}
                className="text-lg hover:text-gray-300 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg hover:text-gray-300 transition duration-300"
              >
                Profile
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
