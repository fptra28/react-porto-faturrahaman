import React from "react";

const ButtonDownload = () => {
  return (
    <a
      href="./assets/cv-Muhammad Faturrahman Putra.pdf"
      download
      className="px-7 py-3 bg-red-800 rounded-[10px] justify-center items-center gap-4 inline-flex text-white hover:bg-red-950 transition duration-300 ease-in-out">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 496 512"
        className="w-[20px] h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[20px] xl:h-[20px]">
        <path
          fillRule="evenodd"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-bold font-primary">Download CV</span>
    </a>
  );
};

export default ButtonDownload;
