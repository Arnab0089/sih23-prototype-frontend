import React from "react";
import PlantBadge from "../../assets/plant-clipart-sample140313a.png";
import { GoArrowRight } from "react-icons/go";
import { Typography, IconButton } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const achievementsData = [
  { id: 1, name: "Achievement 1" },
  { id: 2, name: "Achievement 2" },
  // Add more achievements here
];

export default function AchievementsSection() {
  const { colors, theme } = useSelector((state) => state.theme);

  return (
    <div className="achievements-section  p-4 rounded-3xl shadow-md" style={{ backgroundColor: colors.card }}>
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold" style={{ color: colors.text }}>Badges</h2>
        <div className="more-icon">
          <IconButton variant="text" >
            <GoArrowRight style={{ color: colors.text }} className="text-2xl" />
          </IconButton>
        </div>
      </div>
      <div className="my-4 flex justify-around">
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
