import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { AiOutlineNotification } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

export default function NavBar() {
  const { colors, theme } = useSelector((state) => state.theme);
  return (
    <div className=" fixed bottom-0 left-0 w-full py-3 px-4 bg-white z-50 " style={{ backgroundColor: theme == 'light' ? '#ffffff' : '#000000' }}>
      <div className=" flex justify-between items-center ">
        <Link to="/">
          <GoHome style={{ color: theme == 'dark' ? '#ffffff' : '#000000' }} className="text-3xl" />
        </Link>
        <Link to="/add">
          <BsPeople style={{ color: theme == 'dark' ? '#ffffff' : '#000000' }} className="text-3xl" />
        </Link>
        <Link to="/stats">
          <HiOutlinePlusCircle style={{ color: theme == 'dark' ? '#ffffff' : '#000000' }} className="text-3xl" />
        </Link>
        <Link to="/assistant">
          <AiOutlineNotification style={{ color: theme == 'dark' ? '#ffffff' : '#000000' }} className="text-3xl" />
        </Link>
        <Link to="/profile">
          <BiUser style={{ color: theme == 'dark' ? '#ffffff' : '#000000' }} className="text-3xl" />
        </Link>
      </div>
    </div>
  );
}
