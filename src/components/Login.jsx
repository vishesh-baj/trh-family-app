import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomBtn from "./SubComponents/CustomBtn";
import CustomInput from "./SubComponents/CustomInput";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: nanoid(),
      email: userName,
      password: userPassword,
    };
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    switch (e.target.type) {
      case "email":
        setUserName(e.target.value);

        return userName;

      case "password":
        setUserPassword(e.target.value);

        return userPassword;

      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className=" p-20 flex flex-col  ">
        <div className="p-10 ">
          <div>
            <h1 className="font-bold text-6xl">Login</h1>
            <p className="mt-8 font-light text-gray-400">
              Welcome back! Please Login to your
              <br /> account.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {/* login inputs */}
            <div className="mt-8">
              <CustomInput
                onChange={handleChange}
                id="input-01"
                type="email"
                labelText="User Name"
                value={userName}
              />

              <CustomInput
                onChange={handleChange}
                id="input-01"
                type="password"
                labelText="Password"
                value={userPassword}
              />
              <p className={`text-red-700`}></p>
            </div>
            {/* remember me and forgot password */}
            <div className="mt-8 w-full flex justify-between">
              <div>
                <input
                  className="accent-indigo-500 text-lg"
                  id="remember-me-checkbox"
                  type="checkbox"
                />
                <label
                  htmlFor="remember-me-checkbox"
                  className="font-semibold ml-2"
                >
                  Remember Me
                </label>
              </div>
              <div className="text-indigo-300 cursor-pointer">
                Forgot Password?
              </div>
            </div>
            {/* login button */}
            <div className="mt-8">
              <CustomBtn btnText="Login" />
            </div>
          </form>

          {/* New user Sign in */}
          {/* <div className="pt-8">
          <span>New User?</span>
          <span>Sign up</span>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
