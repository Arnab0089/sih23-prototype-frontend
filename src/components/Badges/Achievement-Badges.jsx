import React from "react";
import Bronze from '../../assets/Bronze Award (1).svg'
import Gold from '../../assets/Gold Award.svg'
import Silver from "../../assets/Silver Award.svg"




export function AchievementBadges() {
    return (
        <div className="relative w-full h-[150px] overflow-x-scroll gap-1 flex flex-row">
            <div className="flex flex-col items-center justify-center text-center bg-[#ffd0d0] rounded-md p-4" style={{ minWidth: "150px" }}>
                <p>Safety Advocate </p>
                <img src={Bronze} className="w-100%" />
            </div>
            <div className="flex flex-col items-center justify-center text-center bg-[#ffd0d0] rounded-md p-4" style={{ minWidth: "150px" }}>
                <p>Bug Buster </p>
                <img src={Gold} className="w-100%" /></div>
            <div className="flex flex-col items-center justify-center text-center bg-[#ffd0d0] rounded-md p-4" style={{ minWidth: "150px" }}>
                <p>Consistent Connector</p>
                <img src={Silver} className="w-100%" /></div>
            <div className="flex flex-col items-center justify-center text-center bg-[#ffd0d0] rounded-md p-4" style={{ minWidth: "150px" }}>
                <p>Spread the Safety </p></div>
            <div className="flex flex-col items-center justify-center text-center bg-[#ffd0d0] rounded-md p-4" style={{ minWidth: "150px" }}>
                <p>Verified Pepper </p></div>
        </div>
    )

}   