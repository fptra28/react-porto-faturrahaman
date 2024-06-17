import React from "react";
import { Link } from "react-router-dom"; // Jika menggunakan React Router

const CardPorto = ({ title, image, url }) => {
  return (
    <div className="w-full md:w-[484px] rounded-[10px] shadow-lg flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <Link
        to={url}
        className="w-full max-h-[68px] px-5 py-5 bg-red-900 flex justify-between items-center transition duration-300 ease-in-out hover:bg-red-950"
      >
        <div className="text-white text-base md:text-lg lg:text-xl font-bold">
          {title}
        </div>
        <div className="text-red-200 text-base md:text-lg lg:text-xl">
          View More...
        </div>
      </Link>
    </div>
  );
};

export default CardPorto;
