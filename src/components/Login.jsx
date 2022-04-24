import React from "react";
import CustomBtn from "./SubComponents/CustomBtn";
import CustomInput from "./SubComponents/CustomInput";

const Login = () => {
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
          {/* login inputs */}
          <div className="mt-8">
            <CustomInput id="input-01" type="email" labelText="User Name" />
            <CustomInput id="input-01" type="password" labelText="Password" />
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
