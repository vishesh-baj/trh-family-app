import React from "react";
import { useSelector } from "react-redux";
import UserInfoCard from "../components/SubComponents/UserInfoCard";
import Sidebar from "../components/Sidebar";
import { convertCamelCase } from "../app/helpers";
import { MdOutlineSettings } from "react-icons/md";

const UserDetails = () => {
  const user = useSelector((state) => state.selectedUser);
  console.log(user);
  return (
    <React.Fragment>
      <Sidebar />
      <div className="mt-20 md:ml-64 h-auto bg-teal-50  dark:bg-gray-700">
        <div className="p-10 flex-col lg:flex-row flex gap-10">
          {/* personal Details */}
          <div className=" p-10 w-full lg:w-1/2 hover:shadow-xl hover:scale-105 hover:shadow-gray-200 hover:bg-gray-100 transiition ease-in-out duration-300 h-[80vh] bg-teal-50 dark:bg-gray-700 rounded-xl shadow-lg shadow-gray-200 cursor-pointer dark:shadow-gray-800 dark:hover:shadow-gray-800">
            <div className="flex justify-between">
              <h1 className=" font-semibold text-3xl lg:text-4xl dark:text-white text-black">
                <span className="text-teal-400">P</span>ersonal{" "}
                <span className="text-teal-400">D</span>
                etails
              </h1>
              <MdOutlineSettings
                size={30}
                className="text-teal-400 animate-spin"
              />
            </div>
            {Object.entries(user)
              .slice(1, 12)
              .map((entry) => (
                <UserInfoCard
                  entry1={convertCamelCase(entry[0])}
                  entry2={entry[1]}
                />
              ))}
          </div>
          {/* other details wrapper */}
          <div className="flex w-full lg:w-1/2 h-[80vh] flex-col gap-10">
            {/* other details one */}
            <div className="w-full bg-teal-50 dark:bg-gray-700 h-[40vh] rounded-xl shadow-lg shadow-gray-200 hover:bg-gray-100 cursor-pointer hover:shadow-xl hover:scale-105 dark:hover:shadow-gray-800  dark:shadow-gray-800 hover:shadow-gray-200 transiition ease-in-out duration-300 p-10">
              <h1 className=" font-semibold text-3xl lg:text-4xl dark:text-white text-black">
                <span className="text-teal-400">L</span>ocation{" "}
                <span className="text-teal-400">D</span>
                etails
              </h1>
              {Object.entries(user)
                .slice(13, 17)
                .map((entry) => (
                  <UserInfoCard
                    entry1={convertCamelCase(entry[0])}
                    entry2={entry[1]}
                  />
                ))}
            </div>
            {/* other details two  */}
            <div className="w-full bg-teal-50 dark:bg-gray-700 h-[40vh] rounded-xl shadow-lg shadow-gray-200 hover:bg-gray-100 cursor-pointer hover:shadow-xl hover:scale-105 dark:hover:shadow-gray-800  dark:shadow-gray-800 hover:shadow-gray-200 transiition ease-in-out duration-300 p-10 ">
              <h1 className=" font-semibold text-3xl lg:text-4xl dark:text-white text-black">
                <span className="text-teal-400">O</span>ther{" "}
                <span className="text-teal-400">D</span>
                etails
              </h1>
              {Object.entries(user)
                .slice(18, 22)
                .map((entry) => (
                  <UserInfoCard
                    entry1={convertCamelCase(entry[0])}
                    entry2={entry[1]}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
