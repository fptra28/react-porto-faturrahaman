import React, { useState } from "react";
import CardPorto from "./card/cardPorto";

const Porto = () => {
  const [portfolio] = useState([
    {
      id: 1,
      title: "Kicks & Chic",
      image: "./assets/Project 1.png",
      url: "https://www.figma.com/design/fbQjdkwpdrxv0SthHb5eLk/Kicks-%26-Chic---User-Page?m=dev&node-id=0-1&t=JgMZDnDbFSJXZpVo-1",
    },
    {
      id: 2,
      title: "Self Styling Replicator",
      image: "./assets/Project 2.png",
    },
    {
      id: 3,
      title: "Nawasena",
      image: "./assets/Project 3.png",
    },
    {
      id: 4,
      title: "Parentify",
      image: "./assets/Project 4.png",
    },
    // Add more portfolio items as needed
  ]);

  return (
    <div className="w-full bg-red-800 py-16 px-4 sm:px-12 lg:px-20 xl:px-52 flex flex-col gap-10">
      <div
        id="title"
        className="flex flex-col justify-center items-center gap-7"
      >
        <div className="text-4xl text-neutral-50 font-semibold">
          My Portfolio
        </div>
        <div className="w-180 h-7 bg-red-300 rounded-full"></div>
      </div>
      <div
        id="porto"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
      >
        {portfolio.slice(0, 3).map((item, index) => (
          <CardPorto
            key={index}
            title={item.title}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Porto;
