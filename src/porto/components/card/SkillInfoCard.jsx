import React from "react";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg font-primary">
      <h6 className="text-xl font-semibold mb-4">{heading}</h6>
      <div className="space-y-4">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">{item.skill}</p>
              <p className="text-sm font-semibold text-gray-500">
                {item.percentage}
              </p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-gradient-to-r from-red-400 to-red-800 h-full rounded-full"
                style={{ width: item.percentage }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
