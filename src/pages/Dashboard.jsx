import React, { useState } from "react";
import DashboardView from "../components/DashboardView";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <div className="flex mt-14 ">
      <Sidebar />
      <DashboardView />
    </div>
  );
};

export default Dashboard;
