import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineUserAdd, AiFillCloseCircle } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Hamburger Menu   */}
      <IoIosMenu
        onClick={() => setIsOpen(!isOpen)}
        className="fixed h-8 w-8  -mt-14 ml-5  md:hidden z-40 text-teal-400 "
      />

      <div className="relative ">
        <div
          className={`${
            !isOpen && "hidden"
          } z-10  fixed md:fixed md:flex md:flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 bg-gradient-to-tl from-teal-500 `}
        >
          {/* Close button */}
          <AiFillCloseCircle
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 w-6 absolute right-5 md:hidden cursor-pointer"
          />

          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 text-xl font-primaryFont text-gray-800 dark:text-gray-200 hover:underline">
              Vishesh Bajpayee
            </h4>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* Sidebar links */}

              <Link to="/dashboard">
                <div className="flex items-center px-4 py-2 text-gray-700 hover:bg-teal-800 hover:text-teal-100   dark:text-gray-200 transition ease-in-out duration-300">
                  <MdSpaceDashboard size={20} />

                  <span className="mx-4 font-medium">Dashboard</span>
                </div>
              </Link>

              <Link to="/new-entry">
                <div className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-teal-800 hover:text-teal-100 transition ease-in-out duration-300">
                  <AiOutlineUserAdd size={20} />

                  <span className="mx-4 font-medium">Add Employee</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
