import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-0 bg-white shadow flex flex-col justify-center items-center font-primary">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full py-7 bg-white flex justify-center items-center flex-wrap px-20">
          <Link
            to="/"
            className="text-black text-base font-bold hover:text-slate-800 mx-4 my-2"
          >
            HOME
          </Link>
          <Link
            to="/portofolio"
            className="text-black text-base font-bold hover:text-slate-800 mx-4 my-2"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/about"
            className="text-black text-base font-bold hover:text-slate-800 mx-4 my-2"
          >
            ABOUT
          </Link>
        </div>

        <div className="w-full h-px border-t border-black"></div>
        <div className="w-full py-7 flex justify-center items-center flex-row">
          <div className="text-black text-xs font-bold text-center sm:text-lg px-10">
            COPYRIGHT © 2024. Made with ❤️ by Senfuri0n
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
