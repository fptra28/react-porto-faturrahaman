import React, { useState } from "react";
import CardToolsSkill from "../card/cardTools-Skills";

const ListToolSkill = () => {
  const [data] = useState([
    {
      id: 1,
      name: "Figma",
      image: "./assets/1667px-Figma-logo.png",
      bg: "", // Menambahkan properti bgLogo untuk menentukan latar belakang
    },
    {
      id: 2,
      name: "VS Code",
      image: "./assets/VisualStudioCode.png",
      bg: "bg-neutral-300", // Menambahkan properti bgLogo untuk menentukan latar belakang
    },
    {
      id: 3,
      name: "Photoshop",
      image: "./assets/Adobe_Photoshop_CC_icon.png",
      bg: "", // Menambahkan properti bgLogo untuk menentukan latar belakang
    },
    {
      id: 4,
      name: "HTML",
      image: "./assets/html-1.svg",
      bg: "bg-neutral-300", // Menambahkan properti bgLogo untuk menentukan latar belakang
    },
    {
      id: 5,
      name: "CSS",
      image: "./assets/CSS3_logo.png",
      bg: "bg-neutral-300", // Menambahkan properti bgLogo untuk menentukan latar belakang
    },
    {
      id: 6,
      name: "JavaScript",
      image: "./assets/JavaScript-logo.png",
      bg: "", // Menambahkan properti bgLogo untuk menentukan latar belakang
    },
  ]);

  return (
    <div className="w-full flex flex-wrap justify-around items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {data.map((item) => (
        <div key={item.id}>
          <CardToolsSkill
            bgLogo={item.bg}
            name={item.name}
            imageUrl={item.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ListToolSkill;
