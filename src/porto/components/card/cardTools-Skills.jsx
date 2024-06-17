import React from "react";

const CardToolsSkill = ({ imageUrl, name, bgLogo }) => {
  return (
    <div className="p-2.5 flex-col justify-start items-center gap-[21px] inline-flex text-primary">
      <div
        className={`${bgLogo} w-[100px] h-[100px] drop-shadow-md rounded-xl flex items-center justify-center`}
      >
        <img
          style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className="text-black text-xl font-bold text-shadow-xl">{name}</div>
    </div>
  );
};

export default CardToolsSkill;
