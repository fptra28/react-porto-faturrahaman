import React, { useState } from "react";
import TitleSection from "../title/title";
import CardSocmed from "../card/cardSocmed";

const ListSocmed = () => {
  const [data] = useState([
    {
      id: 1,
      name: "@fptra28",
      image: "./assets/instagram.svg",
      url: "https://www.instagram.com/fptra28/",
    },
    {
      id: 2,
      name: "havegf._",
      image: "./assets/x-twitter.svg",
      url: "-",
    },
    {
      id: 3,
      name: "@ctrlsenfuri0n",
      image: "./assets/tiktok.svg",
      url: "https://www.tiktok.com/@ctrlsenfuri0n",
    },
    {
      id: 4,
      name: "Senfuri0n_",
      image: "./assets/discord.svg",
      url: "-",
    },
    {
      id: 5,
      name: "Muhammad Faturrahman Putra",
      image: "./assets/linkedin.svg",
      url: "https://www.linkedin.com/in/fptr28",
    },
    {
      id: 6,
      name: "faturrahman86.fr@gmail.com",
      image: "./assets/envelope-solid.svg",
      url: "mailto:faturrahman86.fr@gmail.com",
    },
  ]);

  return (
    <div className="py-16 flex flex-col gap-8">
      <TitleSection textColor="text-neutral-950" lineColor="bg-red-800">
        Tools & Skills
      </TitleSection>
      <div className="flex flex-wrap justify-center gap-4 px-6 md:px-10 xl:px-52">
        {data.map((item) => (
          <CardSocmed SocMed={item.name} img={item.image} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default ListSocmed;
