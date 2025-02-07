import React from "react";
import CardListPorto from "./card/cardlistPorto";
import TitleSection from "./title/title";
import { portfolio } from "../data/data";
import ButtonViewMore from "./button/button";

const Porto = () => {
  return (
    <div className="bg-red-800 gap-8 py-16 px-5 flex flex-wrap justify-center md:px-2 lg:px-28 min-[1281px]:px-52">
      <TitleSection textColor="text-white" lineColor="bg-rose-400">
        My Portfolio
      </TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-items-center">
        {portfolio.slice(0, 4).map((item) => (
          <CardListPorto key={item.id} name={item.title} pict={item.image} desc={item.desc} Github={item.Github} Figma={item.Figma} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <ButtonViewMore url="/portfolio">View More My Portfolio</ButtonViewMore>
      </div>
    </div>
  );
};

export default Porto;
