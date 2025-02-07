import React from "react";
import { portfolio } from "../data/data";
import CardListPorto from "./card/cardlistPorto";

const ListPorto = () => {
  return (
    <div className="py-20 px-5 flex flex-wrap justify-center md:px-2 lg:px-28 min-[1281px]:px-52">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full justify-items-center">
        {portfolio.map((item) => (
          <CardListPorto key={item.id} name={item.title} pict={item.image} desc={item.desc} Github={item.Github} Figma={item.Figma} />
        ))}
      </div>
    </div>
  );
};

export default ListPorto;
