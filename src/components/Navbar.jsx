import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" px-8 py-4 w-screen fixed text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to="/">
            {" "}
            <span className="text-orange-500 text-2xl">Jes2ni</span>{" "}
          </NavLink>
        </div>

        <div>
          {/* Mobile Menu Toggle */}
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
              onClick={toggleMobileMenu}
            >
              <AiOutlineMenu className="text-white w-6 h-6" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 text-xl pr-5">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "text-white" : isActive ? "text-gray-300" : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "text-white" : isActive ? "text-gray-300" : ""
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="block">
              <div className="px-2 pt-2 pb-4 space-y-4 text-xl pr-5 flex flex-col">
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "text-white" : isActive ? "text-gray-300" : ""
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "text-white" : isActive ? "text-gray-300" : ""
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
