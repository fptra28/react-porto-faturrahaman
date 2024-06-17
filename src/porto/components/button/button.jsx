import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, children }) => {
  return (
    <Link
      to={url}
      className="inline-flex justify-center items-center bg-rose-200 rounded-lg font-bold font-primary hover:bg-rose-400 transition duration-300 ease-in-out"
    >
      <div className="px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-7 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase text-center">
        {children}
      </div>
    </Link>
  );
};

export default Button;
