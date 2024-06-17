import React from "react";

const CardToolsSkill = ({ imageUrl, name, bgLogo }) => {
  return (
    <div className="p-2.5 flex flex-col justify-start items-center gap-4 text-primary">
      <div
        className={`${bgLogo} w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 drop-shadow-md rounded-xl flex items-center justify-center`}
      >
        <img className="w-full h-full rounded-xl" src={imageUrl} alt={name} />
      </div>
      <div className="text-black text-base md:text-lg lg:text-xl font-bold text-shadow-xl text-center">
        {name}
      </div>
    </div>
  );
};

export default CardToolsSkill;
