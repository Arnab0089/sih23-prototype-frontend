import React from "react";
import Layout from "../layouts/Layout";
import SummarySection from "../components/Profile/SummarySection";
import StatsSection from "../components/Profile/StatsSection";
import AchievementsSection from "../components/Profile/AchievementsSection";


export default function Profile() {
  return (
    <Layout>
      <div className="container mx-auto mt-4 mb-[4rem]">
        {/* Add the profile picture */}
        <div className="mt-4">
          <SummarySection />
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
