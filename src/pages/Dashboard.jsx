import React from "react";
import { Outlet } from "react-router-dom";
import DashboardView from "../components/DashboardView";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div className="flex mt-14 ">
      <Sidebar />
      <DashboardView />
      <Outlet />
    </div>
  );
};

export default Dashboard;
