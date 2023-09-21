import React, { useCallback } from "react";
import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

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
      <div className="py-4 px-2 bg-white shadow-lg">
        <Typography className="text-center" variant="h5" color="gray">
          {genHeading()}
        </Typography>
      </div>
    </>
  );
}
