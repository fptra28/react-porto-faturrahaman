import React, { useState } from "react";
import { SKILLS } from "../data/data";
import SkillCard from "./card/SkillCard";
import SkillsInfoCard from "./card/SkillInfoCard";
import TitleSection from "./title/title";
import ButtonViewMore from "./button/button";

const Skills = ({
  background,
  Text,
  Line,
  border,
  showButton,
  borderColor,
}) => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section
      className={`px-4 md:px-8 lg:px-28 min-[1281px]:px-52 ${background} py-16 w-full flex flex-col gap-8`}
    >
      <TitleSection textColor={Text} lineColor={Line}>
        Tools & Skills
      </TitleSection>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectedSkill(item)}
              border={border}
              borderColor={borderColor}
            />
          ))}
        </div>
        <div className="">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
        {showButton && (
          <div className="w-full flex justify-center items-center">
            <ButtonViewMore url="/about">View More About Me</ButtonViewMore>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
