import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmployees } from "../app/api";
import { checkLocalStorage, filterEmployees } from "../app/helpers";
import { getUsers } from "../features/user/UserDataSlice";
import Tabs from "./Tabs";

const DashboardView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      const employeesList = await getAllEmployees();
      const filteredEmployeeObj = filterEmployees(employeesList);
      console.log(filteredEmployeeObj);

      // * Checking if localstorage token is present, and then only dispatching the filtered array
      checkLocalStorage() && dispatch(getUsers(filteredEmployeeObj));
    };

    init();
  }, [dispatch]);

  return (
    <div className="flex-1 mt-6 md:ml-64 bg-teal-50 dark:bg-gray-700">
      <Tabs />
    </div>
  );
};

export default DashboardView;
