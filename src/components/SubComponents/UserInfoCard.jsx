import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
const UserInfoCard = ({ user }) => {
  const [toggleOverlay, setToggleOverlay] = useState(false);
  const handleClick = () => {
    setToggleOverlay(!toggleOverlay);
  };

  return (
    <React.Fragment>
      <div className="max-w-5xl flex-1 px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg h-[80vh] my-10 dark:bg-gray-800">
        {/* Image */}

        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-teal-500 rounded-full dark:border-teal-400"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <h1 className="mt-2 pb-2 w-1/2  border-b-4 border-teal-400 text-2xl md:text-4xl lg:text-6xl font-semibold  dark:text-white md:mt-0">
          <span className="text-teal-400 ">U</span>
          ser{"  "}
          <span className="text-teal-400 ">D</span>
          etails
        </h1>

        <div className="w-full ">
          <div className="max-w-[992px] h-[450px] grid grid-cols-12 mt-10 gap-5 ">
            {/* User details container */}

            <div className="col-start-1  col-end-11 border border-teal-400 rounded-xl">
              <div className=" w-screen  h-auto p-10">
                <h1 className="text-teal-500 underline underline-offset-4">
                  First Name: Vishesh{" "}
                </h1>
                <h1 className="text-teal-500 underline underline-offset-4">
                  First Name: Vishesh{" "}
                </h1>
                <h1 className="text-teal-500 underline underline-offset-4">
                  First Name: Vishesh{" "}
                </h1>
                <h1>{user.role}</h1>
                <p>{user.contact_no}</p>
              </div>
            </div>
            {/* Admin options container */}
            <div className="cursor-pointer col-start-11  flex justify-center align-middle items-center col-end-12 rounded-full h-[4vh] border border-teal-400 hover:bg-white transition ease-in-out duration-500 ">
              <RiSettings3Fill
                className="animate-spin text-teal-400 "
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div
        onClick={handleClick}
        className={`z-[100] bg-black opacity-50 w-screen h-screen absolute left-0 top-0 `}
      ></div> */}
    </React.Fragment>
  );
};

export default UserInfoCard;
