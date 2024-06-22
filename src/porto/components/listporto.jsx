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
      desc: "Nawasena: For Your Beauty. Discover, enhance, and celebrate your unique beauty. Explore, indulge, and be inspired!",
      Github: "-",
      Figma: "https://www.figma.com/",
    },
    {
      id: 4,
      title: "Portofolio Faturrahman",
      image: "./assets/Project 4.png",
      desc: "Portofolio Faturrahman: a showcase of creative excellence. Discover, explore, and get inspired by innovative designs and projects!",
      Github: "https://github.com/fptra28/react-porto-faturrahaman.git",
      Figma: "https://www.figma.com/",
    },
    {
      id: 5,
      title: "Parentify",
      image: "./assets/Project 5.jpg",
      desc: "Parentify: a comprehensive platform for modern parents. Explore, learn, and get inspired to nurture and support your family!",
      Github: "https://github.com/fptra28/parentify-project.git",
      Figma:
        "https://www.figma.com/proto/GhSHENdrszqAl6wrW9JCiK/High-Fidelity?page-id=0%3A1&node-id=213-1967&viewport=716%2C99%2C0.03&t=f0pHSBWIHJrFzQv9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=213%3A1967&show-proto-sidebar=1",
    },
  ]);

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
