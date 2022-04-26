import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../features/user/UserSlice";
const Navbar = () => {
  const userLogged = useSelector((state) => state.userLogged.length);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <nav className="bg-white w-full shadow dark:bg-gray-800 z-20 top-0 left-0 right-0 fixed">
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

          {/*  Logout button, handling logging out of the dashboard */}

          <div className="flex ">
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
