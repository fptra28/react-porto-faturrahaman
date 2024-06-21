import React from "react";
import TitleSection from "./title/title";
import ListToolSkills from "./layout/listToolsSkills";
import ButtonViewMore from "./button/button";

const ToolSkill = () => {
  return (
    <div className="w-full flex flex-col min-[1187px]:flex-row justify-center items-center py-10 px-5 sm:px lg:px-20 min-[1443px]:px-52 gap-5">
      <TitleSection textColor="text-black" lineColor="bg-red-800">
        Tools & Skills
      </TitleSection>
      <ListToolSkills textColor="text-neutral-900" />
      <div className="flex justify-center">
        <ButtonViewMore url="/about">View more ABOUT ME</ButtonViewMore>
      </div>
    </div>
  );
};

export default ToolSkill;
