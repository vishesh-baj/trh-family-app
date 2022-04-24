import React from "react";
import Sidebar from "../components/Sidebar";
import Tabs from "../components/Tabs";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      {/* <Sidebar /> */}
      <Tabs />
    </div>
  );
};

export default Dashboard;
