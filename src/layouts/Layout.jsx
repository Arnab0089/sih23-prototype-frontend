import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function Layout({ children }) {
  const location = useLocation();
  const { colors } = useSelector((state) => state.theme);
  return (
    <div className=" min-h-[130vh]" style={{ backgroundColor: colors.background }} >
      {location.pathname !== "/" && <Header />}
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}
