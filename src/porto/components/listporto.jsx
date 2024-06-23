import React from "react";
import { portfolio } from "../data/data";
import CardListPorto from "./card/cardlistPorto";

const ListPorto = () => {
  return (
    <div className="py-20 px-5 flex flex-wrap justify-center md:px-10 lg:px-20">
      <div className="grid gap-4.5 md:px-10 lg:px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {portfolio.map((item) => (
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
    </div>
  );
};

export default ListPorto;
