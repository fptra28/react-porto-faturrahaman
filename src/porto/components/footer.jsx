import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-0 bg-white drop-shadow-xl flex flex-col justify-center items-center font-primary border">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full py-3 bg-white flex justify-center items-center flex-wrap text-sm md:text-base">
          <Link
            to="/"
            className="text-black font-semibold hover:text-red-900 mx-4 my-2"
          >
            HOME
          </Link>
          <Link
            to="/portfolio"
            className="text-black font-semibold hover:text-red-900 mx-4 my-2"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/about"
            className="text-black font-semibold hover:text-red-900 mx-4 my-2"
          >
            ABOUT
          </Link>
        </div>

        <div className="w-full h-px border-t border-black"></div>
        <div className="w-full py-3 flex justify-center items-center px-20 text-black text-sm text-center sm:text-lg flex-col md:flex-row">
          COPYRIGHT © 2024. Made with ❤️ by
          <div className="ps-0 md:ps-2 font-semibold">Senfuri0n</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
