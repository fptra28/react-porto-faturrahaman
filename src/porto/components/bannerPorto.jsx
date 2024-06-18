import React from "react";

const Banner = () => {
  return (
    <div className="bg-porto-pattern w-full mt-20 flex flex-col justify-center items-center py-10 sm:py-20 gap-4">
      <div className="text-xl md:text-2xl lg:text-4xl text-slate-100 font-semibold text-primary">
        My Portfolios
      </div>
      <div className="w-20 md:w-52  h-1 md:h-2 bg-red-500 rounded-full md:bg-red-900"></div>
      <div className="text-base md:text-xl lg:text-2xl text-primary text-center text-slate-50">
        Let's Dive into My Portfolio!
      </div>
    </div>
  );
};

export default Banner;
