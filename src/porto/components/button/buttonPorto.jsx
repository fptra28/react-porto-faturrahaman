import React from "react";
import { Link } from "react-router-dom";

const ButtonPorto = ({ url, disabled, svg }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full max-w-xs h-14 p-2.5 bg-red-800 font-semibold text-base md:text-base lg:text-base xl:text-lg text-neutral-50 rounded-lg justify-center items-center gap-2.5 flex font-primary transition duration-300 ease-in-out ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-red-400 hover:text-neutral-950"
      }`}
    >
      <Link to={url} className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 496 512"
          className="w-[20px] h-[20px] lg:-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]"
        >
          <path fillRule="evenodd" d={svg} clipRule="evenodd" />
        </svg>
      </Link>
      <span>Github.com</span>
    </button>
  );
};

export default ButtonPorto;
