import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getAllEmployees } from "../app/api";
import { checkLocalStorage, filterEmployees } from "../app/helpers";
import DashboardView from "../components/DashboardView";
import Sidebar from "../components/Sidebar";
import { getUsers } from "../features/user/UserDataSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      const employeesList = await getAllEmployees();
      const filteredEmployeeObj = filterEmployees(employeesList);
      // * Checking if localstorage token is present, and then only dispatching the filtered array
      checkLocalStorage() && dispatch(getUsers(filteredEmployeeObj));
    };

    init();
  }, [dispatch]);

  return (
    <div className="flex mt-14 ">
      <Sidebar />
      <DashboardView />
      <Outlet />
    </div>
  );
};

export default Dashboard;
