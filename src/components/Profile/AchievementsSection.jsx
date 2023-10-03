import React from "react";

const achievementsData = [
  { id: 1, name: "Achievement 1" },
  { id: 2, name: "Achievement 2" },
  // Add more achievements here
];

export default function AchievementsSection() {
  return (
    <div className="achievements-section">
      <h2>Achievements</h2>
      <div className="badge-container">
        {achievementsData.map((achievement) => (
          <div key={achievement.id} className="badge">
            {achievement.name}
          </div>
        ))}
      </div>
    </div>
  );
}
