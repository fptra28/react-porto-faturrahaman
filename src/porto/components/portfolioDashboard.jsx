import React from "react";
import CardListPorto from "./card/cardlistPorto";
import TitleSection from "./title/title";
import { portfolio } from "../data/data";
import ButtonViewMore from "./button/button";

const Porto = () => {
  return (
    <div className="bg-red-800 gap-8 py-16 px-5 flex flex-wrap justify-center md:px-5 lg:px-52">
      <TitleSection textColor="text-white" lineColor="bg-rose-400">
        My Portfolio
      </TitleSection>
      <div className="w-full flex flex-wrap flex-row justify-center gap-4">
        {portfolio.slice(0, 3).map((item, index) => (
          <CardListPorto
            key={item.id}
            name={item.title}
            pict={item.image}
            desc={item.desc}
            Github={item.Github}
            Figma={item.Figma}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <ButtonViewMore url="/portfolio">View More My Portfolio</ButtonViewMore>
      </div>
    </div>
  );
};

export default Porto;
