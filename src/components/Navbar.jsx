import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { triggerDarkMode } from "../features/user/DarkMode";
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
          <div>
            <Link
              className="text-xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300 hidden md:block"
              to="/"
            >
              The Rapid Hire
            </Link>
          </div>

          {!darkMode && (
            <svg
              onClick={() => {
                dispatch(triggerDarkMode());
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer hover:text-teal-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}

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
