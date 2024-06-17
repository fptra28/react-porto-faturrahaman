import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css"; // Impor file CSS

const NavbarHome = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full h-[80px] px-4 md:px-8 lg:px-14 xl:px-20 bg-white drop-shadow-xl justify-between items-center flex font-primary fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-1">
        <img
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]"
          src="/assets/logoSenfuri0n.png"
          alt="Logo"
        />
        <div className="text-black text-base sm:text-lg md:text-xl xl:text-2xl font-bold">
          Faturrahman Ptra
        </div>
      </div>
      <div className="hidden h-full md:flex items-center">
        <NavLink
          to="/"
          className={`h-full px-4 flex items-center ${
            isActive("/") ? "bg-red-800 text-white" : "text-black"
          }`}
        >
          <div className="text-xl font-bold uppercase">HOME</div>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={`h-full px-4 flex items-center ${
            isActive("/portfolio") ? "bg-red-800 text-white" : "text-black"
          }`}
        >
          <div className="text-xl font-bold uppercase">Portfolio</div>
        </NavLink>
        <NavLink
          to="/about"
          className={`h-full px-4 flex items-center ${
            isActive("/about") ? "bg-red-800 text-white" : "text-black"
          }`}
        >
          <div className="text-xl font-bold uppercase">ABOUT</div>
        </NavLink>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] inset-x-0 bg-white shadow-lg z-50">
          <NavLink
            to="/"
            className={`block py-2 px-4 ${
              isActive("/") ? "bg-red-800 text-white" : "text-black"
            }`}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={`block py-2 px-4 ${
              isActive("/portfolio") ? "bg-red-800 text-white" : "text-black"
            }`}
            onClick={toggleMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={`block py-2 px-4 ${
              isActive("/about") ? "bg-red-800 text-white" : "text-black"
            }`}
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavbarHome;
