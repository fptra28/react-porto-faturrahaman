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
    <div className="w-full h-[80px] px-4 md:px-8 lg:px-14 xl:px-20  bg-white shadow justify-between items-center inline-flex font-primary fixed top-0 left-0 right-0 z-50">
      <div className="flex grow shrink basis-0 self-stretch justify-start items-center gap-1">
        <img
          className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]"
          src="/assets/logoSenfuri0n.png"
          alt="Logo"
        />
        <div>
          <div className="text-black text-2xl font-bold">Faturrahman Ptra</div>
        </div>
      </div>
      <div className="hidden md:flex grow shrink basis-0 self-stretch justify-end items-center">
        <NavLink
          to="/"
          className={`flex h-full px-[22px] justify-end items-center gap-2.5 ${
            isActive("/") ? "bg-red-800" : ""
          }`}
        >
          <div
            className={`text-xl font-bold uppercase ${
              isActive("/") ? "text-white" : "text-black"
            }`}
          >
            HOME
          </div>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={`flex h-full px-[22px] justify-end items-center gap-2.5 ${
            isActive("/portfolio") ? "bg-red-800" : ""
          }`}
        >
          <div
            className={`text-xl font-bold uppercase ${
              isActive("/portfolio") ? "text-white" : "text-black"
            }`}
          >
            Portfolio
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={`flex h-full px-[22px] justify-end items-center gap-2.5 ${
            isActive("/about") ? "bg-red-800" : ""
          }`}
        >
          <div
            className={`text-xl font-bold uppercase ${
              isActive("/about") ? "text-white" : "text-black"
            }`}
          >
            ABOUT
          </div>
        </NavLink>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
        >
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
        <div
          className={`md:hidden absolute top-[80px] inset-x-0 bg-white shadow dropdown-menu ${
            isMenuOpen ? "show" : "hide"
          }`}
        >
          <NavLink
            to="/"
            className={`block py-2 px-4 ${
              isActive("/")
                ? "bg-red-800 text-white font-semibold"
                : "text-black"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={`block py-2 px-4 ${
              isActive("/portfolio") ? "bg-red-800 text-white" : "text-black"
            }`}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about"
            className={`block py-2 px-4 ${
              isActive("/about") ? "bg-red-800 text-white" : "text-black"
            }`}
          >
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavbarHome;
