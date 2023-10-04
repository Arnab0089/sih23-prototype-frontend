import React from "react";
import Layout from "../layouts/Layout";
import StatsSection from "../components/Profile/StatsSection";
import AchievementsSection from "../components/Profile/AchievementsSection";
import ProfilePicture from "../assets/MetaMe_Smiling.png";

export default function Profile() {
  return (
    <Layout>
      <div className="container mt-4">
        {/* Add the profile picture */}
        <div className="w-full p-4 bg-blue-gray-200 rounded-3xl flex flex-col justify-center items-center shadow-lg">
          <div className="w-fit">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="rounded-full w-36 h-36 object-cover"
            />
          </div>
          <div className="flex-col justify-between">
            <h1 className="text-3xl antialiased">Jackey</h1>
          </div>
        </div>

        {/* Add the stats section */}
        <div className="mt-4">
          <StatsSection />
        </div>
        {/* Add the achievements section */}
        <div className="mt-4">
          <AchievementsSection />
        </div>
      </div>
    </Layout>
  );
}
