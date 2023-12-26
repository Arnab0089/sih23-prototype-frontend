import React from 'react';
import Bronze from '../../assets/Bronze Award (1).svg';
import Gold from '../../assets/Gold Award.svg';
import Silver from '../../assets/Silver Award.svg';

export function AchievementBadges() {
  return (
    <div className="w-full">
      <h2 className="text-lg mx-4 my-2 text-primary-text font-bold">
        My Achievements
      </h2>
      <div className="relative h-[150px] overflow-x-scroll gap-1 mx-4 text-sm flex flex-row">
        <div
          className="flex flex-col items-center justify-around text-center bg-[#ffd0d0] rounded-md p-4"
          style={{ minWidth: '150px' }}
        >
          <p>Safety Advocate </p>
          <img src={Bronze} className="w-100%" />
        </div>
        <div
          className="flex flex-col items-center justify-around text-center bg-[#ffd0d0] rounded-md p-4"
          style={{ minWidth: '150px' }}
        >
          <p>Bug Buster </p>
          <img src={Gold} className="w-100%" />
        </div>
        <div
          className="flex flex-col items-center justify-around text-center bg-[#ffd0d0] rounded-md p-4"
          style={{ minWidth: '150px' }}
        >
          <p>Consistent Connector</p>
          <img src={Silver} className="w-100%" />
        </div>
        <div
          className="flex flex-col items-center justify-around text-center bg-[#ffd0d0] rounded-md p-4"
          style={{ minWidth: '150px' }}
        >
          <p>Spread the Safety </p>
          <img src={Gold} className="w-100%" />
        </div>
        <div
          className="flex flex-col items-center justify-around text-center bg-[#ffd0d0] rounded-md p-4"
          style={{ minWidth: '150px' }}
        >
          <p>Verified Pepper </p>
          <img src={Bronze} className="w-100%" />
        </div>
      </div>
    </div>
  );
}
