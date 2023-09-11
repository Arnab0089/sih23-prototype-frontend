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
          heading={"Failed prop type: Invalid prop `variant` of value "}
          subHeading={
            "Failed prop type: Invalid prop `variant` of value `p` supplied to `MaterialTailwind.Typography`, expected one of "
          }
        />
        <RecentCard />
      </div>
    </div>
  );
}
