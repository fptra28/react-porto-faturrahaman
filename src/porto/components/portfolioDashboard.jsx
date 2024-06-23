import React from "react";
import CardPorto from "./card/cardPorto";
import TitleSection from "./title/title";
import { portfolio } from "../data/data";

const Porto = () => {
  return (
    <div className="w-full bg-red-800 py-16 px-4 sm:px-8 md:px-12 lg:px-14 xl:px-20 2xl:px-32 flex flex-col gap-10">
      <TitleSection textColor="text-white" lineColor="bg-rose-400">
        My Portfolio
      </TitleSection>
      <div
        id="porto"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 xl:px-20"
      >
        {portfolio.slice(0, 3).map((item, index) => (
          <div key={index} className="w-full flex justify-center items-center">
            <CardPorto title={item.title} image={item.image} url="/portfolio" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Porto;
