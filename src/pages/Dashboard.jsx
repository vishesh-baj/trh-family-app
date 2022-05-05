import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import DashboardView from "../components/DashboardView";
import Sidebar from "../components/Sidebar";
import { getUsers } from "../features/user/UserDataSlice";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://trh-family.herokuapp.com/employees")
        .then((res) => {
          setUserData(res.data.data);
        });
    };

    getData();
  }, []);
  dispatch(getUsers(userData));

  return (
    <div className="flex mt-14 ">
      <Sidebar />
      <DashboardView />
      <Outlet />
    </div>
  );
};

export default Dashboard;
