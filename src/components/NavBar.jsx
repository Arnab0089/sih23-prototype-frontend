import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BiSolidMessageAdd } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { FaRobot } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";

export default function NavBar() {
  return (
    <div className=" fixed bottom-0 left-0 w-full py-2 px-4 bg-[#eeeded] z-50 ">
      <div className=" flex justify-between items-center ">
        <Link to="/">
          <AiFillHome className="text-4xl" />
        </Link>
        <Link to="/add">
          <BiSolidMessageAdd className="text-4xl" />
        </Link>
        <Link to="/stats">
          <ImStatsDots className="text-3xl" />
        </Link>
        <Link to="/assistant">
          <FaRobot className="text-4xl" />
        </Link>
        <Link to="/profile">
          <BiSolidUserCircle className="text-4xl" />
        </Link>
      </div>
    </div>
  );
}
