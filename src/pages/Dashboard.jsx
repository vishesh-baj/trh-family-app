import React from "react";
import DashboardView from "../components/DashboardView";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <DashboardView />
    </div>
  );
};

export default Dashboard;
