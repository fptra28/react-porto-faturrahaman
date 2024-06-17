import React from "react";

const Banner = () => {
  return (
    <div className="bg-porto-pattern w-full mt-20 flex flex-col justify-center items-center py-20 gap-4">
      <div className="text-4xl text-slate-100 font-semibold text-primary">
        My Portfolios
      </div>
      <div className="w-[180px] h-[5px] bg-red-900 rounded-full"></div>
      <div className="text-xl text-primary text-slate-100">
        Let's Dive into My Portfolio!
      </div>
    </div>
  );
};

export default Banner;
