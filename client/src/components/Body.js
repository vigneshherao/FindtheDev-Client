import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Filters from "./Filters";

const Body = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <div>
      <NavBar setIsSignUp={setIsSignUp} />
      <Filters />
      <Outlet />
    </div>
  );
};

export default Body;
