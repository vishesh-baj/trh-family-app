import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../app/api";
import { checkLocalStorage } from "../app/helpers";
import { filterEmployees } from "../app/helpers";
import { getAllEmployees } from "../app/api";
import { useDispatch } from "react-redux";
import { getUsers } from "../features/user/UserDataSlice";

const LandingPage = () => {
  const [userData, setUserData] = useState({
    email: "admin@therapidhire.com",
    password: "#Equifax2014",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // *  Handling submit trigger for  form submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    // login
    await login(userData);
    localStorage.setItem("token", "isLogged");
    const employeesList = await getAllEmployees();
    const filteredEmployeeObj = filterEmployees(employeesList);
    // * Checking if localstorage token is present, and then only dispatching the filtered array
    checkLocalStorage() && dispatch(getUsers(filteredEmployeeObj));

    navigate("/dashboard");
  };

  // * Handling event change for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80)]">
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  A Family Dashboard
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  The Rapid Hire Family Dashboard is an intutive way for company
                  admins to keep track of all the employees of the organisation.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  The Rapid Hire
                </h2>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  {/* EMAIL  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email Address
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="loginInput"
                      value={userData.email}
                    />
                  </div>
                  {/* PASSWORD */}
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                      <a
                        href="/"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      onChange={handleChange}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      className="loginInput"
                      value={userData.password}
                    />
                  </div>
                  {/* SUBMIT BUTTON */}
                  <div className="mt-6">
                    <button type="submit" className="loginBtn">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
