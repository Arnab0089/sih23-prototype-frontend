import React from "react";
import Layout from "../layouts/Layout";
import StatsSection from "../components/Profile/StatsSection";
import AchievementsSection from "../components/Profile/AchievementsSection";

export default function Profile() {
  return (
    <Layout>
      <div className="container">
        <h1>Profile</h1>
        {/* Add the profile picture */}
        <img
          src="profile-picture-url.jpg"
          alt="Profile"
          className="profile-picture"
        />
        {/* Add the stats section */}
        <StatsSection />
        {/* Add the achievements section */}
        <AchievementsSection />
      </div>
    </Layout>
  );
}
