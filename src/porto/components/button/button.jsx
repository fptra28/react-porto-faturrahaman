import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, children }) => {
  return (
    <Link
      to={url}
      className="inline-flex items-center bg-rose-200 rounded-lg font-bold font-primary hover:bg-rose-400 transition duration-300 ease-in-o"
    >
      <div className="px-7 py-4 text-base md:text-lg lg:text-xl uppercase text-center">
        {children}
      </div>
    </Link>
  );
};

export default Button;
