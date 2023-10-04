import React, { useCallback } from "react";
import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Header() {
  const location = useLocation();
  const genHeading = useCallback(() => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/add":
        return "Add Incident";
      case "/stats":
        return "Stats & Analytics";
      case "/assistant":
        return "Assistant Bot";
      case "/profile":
        return "Profile";
      default:
        return "Home";
    }
  }, [location.pathname]);

  return (
    <>
      <div className="py-3 px-3 bg-white shadow-lg flex justify-between items-center">
        <Typography className="text-left" variant="h5" color="gray">
          {genHeading()}
        </Typography>
        <BsThreeDotsVertical className="text-xl" />
      </div>
    </>
  );
}
