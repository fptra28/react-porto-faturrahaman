import React from "react";

const SkillCard = ({
  title,
  iconUrl,
  isActive,
  onClick,
  border,
  borderColor,
}) => {
  return (
    <div
      className={`w-full px-3 py-2 md:px-5 md:py-3 flex gap-4 rounded-lg drop-shadow-xl items-center justify-between bg-red-800 ${border} ${borderColor} hover:bg-red-700 text-neutral-50 font-primary border-2 cursor-pointer transition-all duration-300 ${
        isActive ? "bg-red-900" : ""
      }`}
      onClick={() => onClick()}
    >
      <div className="skill-icon w-8 h-8 md:w-12 md:h-12 flex-shrink-0">
        <img
          src={iconUrl}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="font-semibold text-base md:text-xl flex items-center justify-center">
        {title}
      </div>
    </div>
  );
};

export default SkillCard;
