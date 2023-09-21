import React from "react";
import RecentCard from "./RecentCard";

export default function Recents() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium">Recent Events</h1>
      </div>
      <div className="flex flex-col w-full gap-3 mt-3">
        <RecentCard
          heading={"A Rape case happend at Institute of Technology Guwahati!"}
          subHeading={
            "On May 28, a student was arrested for allegedly drugging and raping a batchmate. The woman was brought to the hospital in an unconscious state."
          }
        />
        <RecentCard
          heading={"Physical Assult near Barrackpore! "}
          subHeading={
            "I was physically assualted by my aunt. It was all of a sudden that I failed to react. It has left me with trauma. "
          }
        />
      </div>
    </div>
  );
}
