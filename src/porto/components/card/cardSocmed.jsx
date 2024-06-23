import React from "react";
import { Link } from "react-router-dom";

const Socmed = ({ SocMed, img, url }) => {
  return (
    <Link
      to={url}
      className="px-5 py-3 bg-red-800 rounded-[11px] justify-center items-center gap-5 flex flex-row hover:bg-red-600 transition duration-300 ease-in-out"
    >
      <img src={img} alt={SocMed} className="h-[25px] text-neutral-50" />
      <div className="text-center text-neutral-50 text-base md:text-lg font-semibold">
        {SocMed}
      </div>
    </Link>
  );
};

export default Socmed;
