import { useState } from 'react';
import {
  FaPepperHot,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaExclamationTriangle,
  FaCheckCircle,
  FaEdit,
} from 'react-icons/fa';

const ProfileAbout = ({ user }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="relative">
        <img
          src={user.profilePicture}
          alt="ProfilePicture"
          className="rounded-full h-32 w-32 object-contain border-4 border-[91A8D0] shadow-xl"
        />
        <div className="absolute bottom-0 right-0 shadow-md rounded-full">
          <button className="bg-[#91A8D0] p-2 rounded-full">
            <FaEdit className="text-[#A13131]" />
          </button>
        </div>
      </div>

      <div className="my-2 flex flex-col justify-between items-center text-center">
        <h5 className="text-xl text-[#A13131] font-bold">{user.userName}</h5>
        <p className="text-sm text-[#91A8D0] font-semibold">@{user.userId}</p>
        <h6 className="text-xl text-[#A13131] font-bold">{user.userBio}</h6>
      </div>

      <div className="flex flex-row flex-wrap justify-evenly items-center text-center">
        <div className="text-[#91A8D0] font-semibold flex flex-row items-center mx-4">
          <FaMapMarkerAlt />
          <p className="text-gray-500 mx-1">{user.location}.</p>
        </div>
        <div className="text-[#91A8D0] font-semibold flex flex-row items-center mx-4">
          <FaCalendarCheck />
          <p className="text-gray-500 mx-1">
            Joined {user.joinedMonth}, {user.joinedYear}.
          </p>
        </div>
        {user.verified && (
          <div className="text-[#91A8D0] font-semibold flex flex-row items-center mx-4">
            <FaCheckCircle />
            <p className="text-gray-500 mx-1">Verified phone number.</p>
          </div>
        )}
        {!user.verified && (
          <div className="text-[#91A8D0] font-semibold flex flex-row items-center mx-4">
            <FaExclamationTriangle />
            <p className="text-gray-500 mx-1">Verify phone number.</p>
          </div>
        )}
      </div>

      <hr className="border-gray-400 my-2 w-full" />
    </div>
  );
};

export default ProfileAbout;
