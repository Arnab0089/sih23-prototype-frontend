import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { AiOutlineNotification } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

export default function NavBar() {
  return (
    <div className=" fixed bottom-0 left-0 w-full py-3 px-4 bg-white z-50 ">
      <div className=" flex justify-between items-center ">
        <Link to="/">
          <GoHome className="text-3xl" />
        </Link>
        <Link to="/add">
          <BsPeople className="text-3xl" />
        </Link>
        <Link to="/stats">
          <HiOutlinePlusCircle className="text-3xl" />
        </Link>
        <Link to="/assistant">
          <AiOutlineNotification className="text-3xl" />
        </Link>
        <Link to="/profile">
          <BiUser className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}
