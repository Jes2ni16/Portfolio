import React from "react";
import Home from "../Home";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Design from "../config/particles-config";

function Layout() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Outlet />
        <Design />
      </div>
    </>
  );
}

export default Layout;
