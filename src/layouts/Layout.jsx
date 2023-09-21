import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function Layout({ children }) {
  const location = useLocation();
  return (
    <div className=" min-h-[130vh]">
      {location.pathname !== "/" && <Header />}
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}

<Aside></Aside>;
