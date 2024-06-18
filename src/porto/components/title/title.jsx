import React from "react";

const Title = ({ children, textColor, lineColor }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <div
        className={`text-2xl md:text-3xl lg:text-4xl font-bold ${textColor}`}
      >
        {children}
      </div>
      <div
        className={`w-24 md:w-32 lg:w-40 h-1 md:h-1 lg:h-1.5 ${lineColor} rounded-full`}
      ></div>
    </div>
  );
};

export default Title;
