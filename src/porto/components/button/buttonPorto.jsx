import React from "react";
import { Link } from "react-router-dom";

const ButtonPorto = ({ url, disabled, svg, name }) => {
  const buttonClassName = `w-full h-14 bg-red-800 font-semibold text-base md:text-base lg:text-base xl:text-lg text-neutral-50 rounded-lg justify-center items-center flex font-primary transition duration-300 ease-in-out ${
    disabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:bg-red-400 hover:text-neutral-950"
  }`;

  const content = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 496 512"
        className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[25px] xl:h-[25px]"
      >
        <path fillRule="evenodd" d={svg} clipRule="evenodd" />
      </svg>
      <span>{name}</span>
    </>
  );

  return (
    <button disabled={disabled} className={buttonClassName}>
      {disabled ? (
        <div className="w-full h-full flex flex-row justify-between items-center px-5 py-2 ">
          {content}
        </div>
      ) : (
        <Link
          to={url}
          className="w-full h-full flex flex-row justify-between items-center px-5 py-2"
        >
          {content}
        </Link>
      )}
    </button>
  );
};

export default ButtonPorto;
