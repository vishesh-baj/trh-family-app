import React from "react";
import Form from "./Form";
import NewTabs from "./Tabs";

const DashboardView = () => {
  return (
    <div className="flex-1">
      <NewTabs />
      <Form />
    </div>
  );
};

export default DashboardView;
