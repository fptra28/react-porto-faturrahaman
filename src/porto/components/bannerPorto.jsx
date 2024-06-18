import React from "react";

const Banner = () => {
  return (
    <div className="bg-porto-pattern w-full mt-20 flex flex-col justify-center items-center py-10 sm:py-20 gap-4">
      <div className="text-xl md:text-2xl lg:text-3xl text-slate-100 font-semibold text-primary">
        My Portfolios
      </div>
      <div className="w-16 md:w-24 h-2 md:h-3 bg-red-900 rounded-full"></div>
      <div className="text-lg md:text-xl lg:text-2xl text-primary text-center">
        Let's Dive into My Portfolio!
      </div>
    </div>
  );
};

export default Banner;
