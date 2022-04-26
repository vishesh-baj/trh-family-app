import React, { useState } from "react";
import DashboardView from "../components/DashboardView";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="flex ">
      <Sidebar />
      <DashboardView />
    </div>
  );
};

export default Dashboard;
