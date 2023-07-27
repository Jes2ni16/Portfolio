import React from "react";
import Training from "./Training";
import Home from "./Home";
import UserList from "./Skills";
import Projects from "./Projects";

function HomeLayout() {
  return (
    <>
      <div className="r">
        <Home />
        <Training />
        <UserList />
        <Projects />
      </div>
    </>
  );
}

export default HomeLayout;
