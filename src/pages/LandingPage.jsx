import React from "react";
import Login from "../components/Login";
const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen b">
      {/* login div */}
      <div className="w-1/2">
        <Login />
      </div>

      {/* Background div  */}
      <div className="  w-1/2 bg-gradient-to-tr from-indigo-500 to-teal-600">
        <h1 className="font-primaryFont text-8xl font-bold p-20 mt-56 text-white tracking-wide">
          Welcome <br /> Back!
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
