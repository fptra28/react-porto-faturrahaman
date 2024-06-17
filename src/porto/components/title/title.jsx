import React from "react";

const Title = ({ children, textColor, lineColor }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <div className={`text-4xl font-bold ${textColor}`}>{children}</div>
      <div className={`w-[180px] h-[7px] ${lineColor} rounded-full`}></div>
    </div>
  );
};

export default Title;
