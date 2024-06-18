import React, { useState } from "react";
import CardListPorto from "./card/cardlistPorto";

const ListPorto = () => {
  const [portfolio] = useState([
    {
      id: 1,
      title: "Kicks & Chic",
      image: "./assets/Project 1.png",
      desc: "Kicks & Chic: an e-commerce site for shoe enthusiasts. Explore, shop, and get inspired!",
      Github: "https://github.com/fptra28/kicks-chic.git",
      Figma:
        "https://www.figma.com/design/fbQjdkwpdrxv0SthHb5eLk/Kicks-%26-Chic---User-Page?m=dev&node-id=0-1&t=JgMZDnDbFSJXZpVo-1",
    },
    {
      id: 2,
      title: "Self Styling Replicator",
      image: "./assets/Project 2.png",
      desc: "SSR: a revolutionary platform for fashion-forward individuals. Discover, create, and redefine your style!",
      Github: "-",
      Figma:
        "https://www.figma.com/proto/IeeqFziVyiK1hizZm1lLnD/SSR-UI?page-id=0%3A1&node-id=146-106&starting-point-node-id=146%3A106&t=jSCcKA0rWYGuljuY-1",
    },
    {
      id: 3,
      title: "Nawasena",
      image: "./assets/Project 3.png",
      desc: "Description for Nawasena",
      Github: "https://github.com/yourusername/nawasena",
      Figma: "https://www.figma.com/",
    },
    {
      id: 4,
      title: "Parentify",
      image: "./assets/Project 4.png",
      desc: "Description for Parentify",
      Github: "https://github.com/yourusername/parentify",
      Figma: "https://www.figma.com/",
    },
  ]);

  return (
    <div className="py-20 px-10 flex flex-wrap justify-center gap-4.5 md:px-10 lg:px-20">
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
  );
};

export default ListPorto;
