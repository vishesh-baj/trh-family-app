import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserInfoCard from "../components/SubComponents/UserInfoCard";
import Sidebar from "../components/Sidebar";
import { convertCamelCase, formArray } from "../app/helpers";
import { MdOutlineSettings } from "react-icons/md";
import FormInput from "../components/SubComponents/FormInput";
import { GrClose } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { deleteEmployee, editEmployee } from "../app/api";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../features/user/UserDataSlice";

const UserDetails = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.selectedUser);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [updatedObj, setUpdatedObj] = useState({});
  const dispatch = useDispatch();

  const removeLastVal = (obj) => {
    delete obj[`${Object.keys(obj).length - 1}`];
    return obj;
  };

  const [formInputObj, setFormInputObj] = useState(removeLastVal(user));

  // MODAL LOGIC
  // * handles the onChange foreach input

  const handleChange = (e) => {
    setFormInputObj({ ...formInputObj, [e.target.name]: e.target.value });
  };

  // * Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = editEmployee(user._id, formInputObj);
    await updatedData
      .then((res) => {
        console.log(res);
        setUpdatedObj(res);
      })
      .then(() => dispatch(getUsers(updatedObj)));
    console.log(updatedObj);

    navigate("/dashboard");
  };

  return (
    <React.Fragment>
      <Sidebar />
      <div className="mt-20 md:ml-64 h-auto bg-teal-50  dark:bg-gray-700 font-primaryFont">
        <div className="p-10 flex-col lg:flex-row flex gap-10">
          {/* personal Details */}
          <div className=" p-10 w-full lg:w-1/2 hover:shadow-xl hover:scale-105 hover:shadow-gray-200 hover:bg-gray-100 transiition ease-in-out duration-300 h-[80vh] bg-teal-50 dark:bg-gray-700 rounded-xl shadow-lg shadow-gray-200 cursor-pointer dark:shadow-gray-800 dark:hover:shadow-gray-800">
            <div className="flex justify-between">
              <h1 className=" font-semibold text-3xl lg:text-4xl dark:text-white text-black">
                <span className="text-teal-400">P</span>ersonal{" "}
                <span className="text-teal-400">D</span>
                etails
              </h1>
              <div className="flex justify-around">
                <MdOutlineSettings
                  onClick={() => setShowModal(true)}
                  size={30}
                  className="text-teal-400 animate-spin"
                />
                <MdDeleteOutline
                  onClick={() => {
                    setShowDeleteModal(true);
                  }}
                  size={30}
                  className="text-red-500 animate-pulse"
                />
              </div>
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
                .slice(18, 23)
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

      {/* Edit Modal */}

      {showModal && (
        <>
          <div
            className={`justify-center font-primaryFont items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   transition ease-in duration-300`}
          >
            <div className=" my-6 mx-auto w-[70vw] h-[80vh] md:w-1/2 md:h-1/2 fixed overflow-scroll rounded-xl ">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white  dark:bg-gray-700 outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                  <h3 className="text-3xl font-semibold dark:text-white">
                    Edit Employee Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* FORM */}
                <div className=" p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
                      {/* INPUTS*/}
                      {formArray.slice(0, 22).map((entry) => {
                        // arr.push(user[entry.name]);

                        return (
                          <FormInput
                            key={entry.name}
                            id={entry.id}
                            name={entry.name}
                            label={entry.label}
                            type={entry.type}
                            handleChange={handleChange}
                            defaultValue={user[entry.name]}
                          />
                        );
                      })}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="flex justify-end mt-6">
                      <button
                        className="text-red-500 border border-red-800 hover:bg-red-800 rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <div>
                        <button
                          type="submit"
                          className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      )}

      {/*Delete Modal */}
      {showDeleteModal && (
        <>
          <div
            className={`justify-center font-primaryFont items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none   transition ease-in duration-300 `}
          >
            <div className=" my-6 mx-auto md:w-1/2 md:h-1/2 w-[70vw] h-[50vh] fixed overflow-scroll  ">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white rounded-xl  dark:bg-gray-700 outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl font-semibold dark:text-white">
                    Delete Employee
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowDeleteModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* FORM */}
                <div className=" p-6 flex-auto">
                  <div className="flex flex-col md:flex-row justify-between  ">
                    <h1 className=" text-black dark:text-white text-lg">
                      Are you sure you want to delete {user.firstName}{" "}
                      {user.lastName}'s data ?
                    </h1>
                    <div className="flex gap-5 mt-5">
                      <button
                        onClick={() => {
                          deleteEmployee(user._id);
                          navigate("/dashboard");
                        }}
                        className="bg-teal-400 text-white px-5 py-2 rounded-lg"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setShowDeleteModal(false)}
                        className="bg-red-400 text-white px-5 py-2 rounded-lg"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  border-solid rounded-b"></div>
              </div>
            </div>
          </div>
          <GrClose />

          <div
            onClick={() => setShowDeleteModal(false)}
            className="opacity-80 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      )}
    </React.Fragment>
  );
};

export default UserDetails;
