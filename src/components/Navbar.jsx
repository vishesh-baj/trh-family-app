import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { triggerDarkMode } from "../features/user/DarkMode";
import { CgDarkMode } from "react-icons/cg";
const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="relative ">
      <nav className="bg-white w-full shadow dark:bg-gray-800 opacity-95 z-20 top-0 left-0 right-0 fixed">
        <div className="container mx-auto py-5 px-5 flex justify-between ">
          {/* Company Logo */}
          <div className="flex items-center flex-row-reverse gap-5">
            <Link
              className="text-xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300 hidden md:block"
              to="/"
            >
              The Rapid Hire
            </Link>
            {!darkMode && (
              <CgDarkMode
                className=" duration-300 animate-spin text-teal-200 cursor-pointer ml-12 "
                size={25}
                onClick={() => {
                  dispatch(triggerDarkMode());
                }}
              />
            )}
          </div>

          {/*  Logout button, handling logging out of the dashboard */}

          <div className="flex  justify-between">
            {token && (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
                type="button"
                className="px-3 py-2 bg-teal-200 text-black dark:bg-teal-500 font-semibold rounded-lg hover:bg-teal-500 hover:text-white"
                aria-label="toggle menu"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
