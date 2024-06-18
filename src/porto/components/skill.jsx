import React from "react";
import ListToolSkill from "./layout/listToolsSkills";
import TitleSection from "./title/title";

const SKill = () => {
  return (
    <div className="bg-red-800 w-full flex flex-col min-[1187px]:flex-row justify-center items-center py-10 px-10 lg:px-20 min-[1443px]:px-52 gap-5">
      <div className="w-full md:w-[400px]">
        <TitleSection textColor="text-neutral-50" lineColor="bg-red-400">
          Tools & Skills
        </TitleSection>
      </div>
      <ListToolSkill textColor="text-neutral-50" />
    </div>
  );
};

export default SKill;
