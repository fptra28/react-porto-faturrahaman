import React, { useState } from "react";
import CardPorto from "./card/cardPorto";
import ButtonViewMore from "./button/button";
import TitleSection from "./title/title";

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
    <div className="w-full bg-red-800 py-16 px-4 sm:px-8 md:px-12 lg:px-14 xl:px-20 2xl:px-32 flex flex-col gap-10">
      <TitleSection textColor="text-white" lineColor="bg-rose-400">
        My Portfolio
      </TitleSection>
      <div
        id="porto"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
      >
        {portfolio.slice(0, 3).map((item, index) => (
          <div key={index} className="w-full flex justify-center items-center">
            <CardPorto title={item.title} image={item.image} url={item.url} />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <ButtonViewMore url="/portofolio">
          View more of my portfolios
        </ButtonViewMore>
      </div>
    </div>
  );
};

export default Porto;
