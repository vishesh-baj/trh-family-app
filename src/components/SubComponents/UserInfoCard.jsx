import React from "react";
import { RiSettings3Fill } from "react-icons/ri";

const UserInfoCard = ({ user }) => {
  return (
    <React.Fragment>
      <div className="max-w-5xl flex-1 px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg my-10 dark:bg-gray-800">
        {/* Image */}
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover hover:opacity-80 cursor-pointer w-20 h-20 border-2 border-teal-500 rounded-full dark:border-teal-400"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <h1 className="mt-2 pb-2 w-1/2 border-b-4 border-teal-400 text-2xl md:text-4xl lg:text-6xl font-semibold  dark:text-white md:mt-0">
          <span className="text-teal-400 ">U</span>
          ser{"  "}
          <span className="text-teal-400 ">D</span>
          etails
        </h1>

        <div className="w-full ">
          <div className="max-w-[992px] h-auto grid grid-cols-12 mt-10 gap-5 ">
            {/* User details container */}

            <div className="col-start-1  col-end-12 md:col-end-11 border border-teal-400 rounded-xl">
              <div className="flex flex-col md:flex-row">
                <div className=" w-full p-10">
                  {Object.keys(user)
                    .slice(1, 12)
                    .map((field) => (
                      <h1 className="text-lg font-semibold py-1 items-center text-black dark:text-teal-400">
                        {field.toUpperCase()}:<span> {user[field]}</span>
                      </h1>
                    ))}
                </div>

                <div className=" w-full p-10">
                  {Object.keys(user)
                    .slice(13, 23)
                    .map((field) => (
                      <h1 className="text-lg font-semibold py-1 items-center text-black dark:text-teal-400">
                        {field.toUpperCase()}: {user[field]}
                      </h1>
                    ))}
                </div>
              </div>
            </div>
            {/* Admin options container */}
            {/* <div className="cursor-pointer col-start-11  flex justify-center align-middle items-center col-end-12 rounded-full h-[4vh] border border-teal-400 hover:bg-white transition ease-in-out duration-500 ">
              <RiSettings3Fill
                className="animate-spin text-teal-400 "
                size={20}
              />
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfoCard;
