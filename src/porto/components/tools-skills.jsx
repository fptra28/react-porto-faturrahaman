import React from "react";
import TitleSection from "./title/title";
import ListToolSkills from "./layout/listToolsSkills";
import ButtonViewMore from "./button/button";

const ToolSkill = () => {
  return (
    <div className="w-full py-16 sm:px-16 lg:px-18 xl:px-52 flex flex-col gap-10">
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
