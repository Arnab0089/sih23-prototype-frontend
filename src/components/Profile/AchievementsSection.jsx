import React from "react";
import PlantBadge from "../../assets/plant-clipart-sample140313a.png";
import { GoArrowRight } from "react-icons/go";
import { Typography } from "@material-tailwind/react";

const achievementsData = [
  { id: 1, name: "Achievement 1" },
  { id: 2, name: "Achievement 2" },
  // Add more achievements here
];

export default function AchievementsSection() {
  return (
    <div className="achievements-section bg-red-200 p-4 rounded-3xl shadow-md">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Badges</h2>
        <div className="more-icon">
          <GoArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="mt-4 flex justify-around">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className="badge bg-teal-500 text-white px-2 py-1 rounded-xl"
          >
            <img
              src={PlantBadge}
              alt="PlantedBadge"
              className="achive-pic rounded w-32 h-32 object-cover"
            />
            <Typography variant="paragraph" className="text-center">
              {achievement.name}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
