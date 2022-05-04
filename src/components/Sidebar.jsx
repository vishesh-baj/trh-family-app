import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleSidebar } from "../features/nav/NavbarSlice";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const toggle = useSelector((state) => state.sidebarToggle);

  return (
    <React.Fragment>
      <div className="relative mt-6">
        <div
          className={`${
            !toggle && "hidden"
          } z-10  fixed md:fixed md:flex md:flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 bg-gradient-to-tl from-teal-500`}
        >
          {/* specific Cartlane redirection  */}

          {/* Cancel button */}
          <svg
            onClick={() => dispatch(toggleSidebar())}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-5 md:hidden "
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {/* <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
            The Name
          </h2> */}

          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              Vishesh Bajpayee
            </h4>
            {/* <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
              {user.email}
            </p> */}
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Sidebar links */}
              {/* DASHBOARD LINK */}
              <NavLink
                onClick={() => setIsActive(!isActive)}
                index
                to="/dashboard"
              >
                <div
                  className={`flex items-center px-4 py-2 ${
                    !isActive &&
                    "text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  <MdSpaceDashboard fontSize={20} />

                  <span className="mx-4 font-medium">Dashboard</span>
                </div>
              </NavLink>
              {/* ADD EMPLOYEE LINK */}
              <NavLink
                onClick={() => setIsActive(!isActive)}
                to="/add-employee"
              >
                <div
                  className={`flex items-center px-4 py-2 ${
                    isActive &&
                    "text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  <IoPersonAddOutline fontSize={20} />
                  <span className="mx-4 font-medium">Add Employee</span>
                </div>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
