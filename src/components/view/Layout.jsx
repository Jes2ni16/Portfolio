import React from "react";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Design from "../config/particles-config";
import Spinner from "../Spinner";

function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Navbar />
            <Outlet />
            <Design />
          </>
        )}
      </div>
    </>
  );
}

export default Layout;
