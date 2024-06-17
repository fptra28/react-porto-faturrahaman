import React from "react";

const CardToolsSkill = ({ imageUrl, name, bgLogo, textColor }) => {
  return (
    <div className="p-2.5 flex flex-col justify-start items-center gap-3 text-primary">
      <div
        className={`${bgLogo} w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 drop-shadow-S1 rounded-xl flex items-center justify-center`}
      >
        <img className="w-full h-full rounded-xl" src={imageUrl} alt={name} />
      </div>
      <div
        className={`${textColor} text-sm md:text-base lg:text-lg font-bold drop-shadow-S2 text-center`}
      >
        {name}
      </div>
    </div>
  );
};

export default CardToolsSkill;
