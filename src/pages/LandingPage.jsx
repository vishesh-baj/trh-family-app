import React from "react";
import Login from "../components/Login";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen b">
      <div className="bg-black w-1/2"></div>
      {/* login div */}
      <div className="w-1/2">
        <Login />
      </div>
    </div>
  );
};

export default LandingPage;
