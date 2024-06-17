import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full px-0 bg-white shadow flex flex-col justify-center items-center font-primary">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full py-7 bg-white flex justify-center items-center gap-16">
          <Link
            to="/"
            className="text-black text-base font-bold hover:text-slate-800"
          >
            HOME
          </Link>
          <Link
            to="/portofolio"
            className="text-black text-base font-bold hover:text-slate-800"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/about"
            className="text-black text-base font-bold hover:text-slate-800"
          >
            ABOUT
          </Link>
        </div>
        <div className="w-full h-px border-t border-black"></div>
        <div className="w-full py-7 flex justify-center items-center flex-row">
          <div className="text-black text-lg font-bold">
            COPYRIGHT © 2024. Made with ❤️ by
          </div>
          <div className="text-red-800 text-lg font-bold ms-1.5">Senfuri0n</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
