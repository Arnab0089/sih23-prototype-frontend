import React from "react";
import NavBar from "../components/NavBar";

export default function Layout({ children }) {
  return (
    <div className=" min-h-[130vh]">
      <NavBar />
      <div className="">{children}</div>
    </div>
  );
}
