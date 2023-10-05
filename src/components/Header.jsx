import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store";
import { Typography, IconButton } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { theme, colors } = useSelector((state) => state.theme);

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
      <div className="py-3 px-3 flex justify-between items-center" style={{ backgroundColor: theme == 'light' ? '#ffffff' : '#000000' }}>
        <Typography style={{ color: colors.text }} className="text-left" variant="h5" color="gray">
          {genHeading()}
        </Typography>
        <div className="">
          <IconButton variant="text" color="gray" >
            {theme === "light" ? (
              <BsMoon
                className="text-xl"
                onClick={() => dispatch(toggleTheme())}
              />
            ) : (
              <BsSun
                className="text-2xl text-white"
                onClick={() => dispatch(toggleTheme())}
              />
            )}
          </IconButton>
          <IconButton variant="text" color="gray" >
            <BsThreeDotsVertical className="text-xl" style={{ color: colors.text }} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
