import React from "react";

const Jumbotron = () => {
  return (
    <div className="w-full mt-20 px-4 md:px-20 lg:px-12 xl:px-52 py-16 flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="order-last md:order-first flex-grow flex-shrink flex-basis-0 p-4 flex flex-col justify-center items-start gap-4 font-inter sm:align-center">
        <div className="text-black text-xl md:text-3xl font-normal">
          Hello✨, I'm
        </div>
        <div className="text-black text-4xl md:text-5xl lg:text-6xl xl:text-7.5xl font-bold">
          Muhammad Faturrahman Putra
        </div>
        <div className="text-black text-xl md:text-3xl font-normal">
          Web Developer & UI/UX Designer
        </div>
        <div className="w-[250px] h-[10px] bg-red-800 rounded-full"></div>
      </div>
      <img
        className="lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[321.6px] xl:w-[600px] xl:h-[643.20px]"
        src="/assets/PP.png"
        alt="Profile Picture"
      />
    </div>
  );
};

export default Jumbotron;
