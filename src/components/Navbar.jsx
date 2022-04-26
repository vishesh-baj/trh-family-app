import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { triggerDarkMode } from "../features/user/DarkMode";
import { logout } from "../features/user/UserSlice";
const Navbar = () => {
  const userLogged = useSelector((state) => state.userLogged.length);
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="relative ">
      <nav className="bg-white w-full shadow dark:bg-gray-800 opacity-95 z-20 top-0 left-0 right-0 fixed">
        <div className="container mx-auto py-5 px-5 flex justify-between ">
          {/* Company Logo */}
          <div>
            <a
              className="text-xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300 hidden md:block"
              href="/"
            >
              The Rapid Hire
            </a>
          </div>

          {/* MOON SVG */}
          <svg
            onClick={() => {
              dispatch(triggerDarkMode());
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-8  w-8 pt-2 dark:text-white  cursor-pointer hover:text-teal-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>

          {/*  Logout button, handling logging out of the dashboard */}

          <div className="flex  justify-between  ">
            {userLogged ? (
              <Link to="/">
                <button
                  onClick={dispatch(logout())}
                  type="button"
                  className="px-3 py-2 bg-white font-semibold rounded-lg hover:bg-blue-500 hover:text-white"
                  aria-label="toggle menu"
                >
                  Logout
                </button>
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
