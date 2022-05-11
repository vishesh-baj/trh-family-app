// import { useFormik } from "formik";
import React, { useState } from "react";
import { postEmployee } from "../app/api";
import { formArray } from "../app/helpers";
import Sidebar from "./Sidebar";
import FormInput from "./SubComponents/FormInput";

const Form = () => {
  const [formInputObj, setFormInputObj] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    fatherFirstName: "",
    fatherLastName: "",
    motherName: "",
    contactNo: "",
    emergencyContactNo: "",
    marriedStatus: "",
    localAddress: "",
    cityOrTown: "",
    state: "",
    pinCode: "",
    permanentAddress: "",
    aadharNo: "",
    email: "",
    anyOtherIdentity: "",
    role: "",
    joiningDate: "",
    workExperience: "",
    higherQualification: "",
    bloodGroup: "",
    profilePicture: "",
  });

  // const changeToNumber = () => {
  //   formInputObj.contactNo = Number(formInputObj.contactNo);
  //   formInputObj.emergencyContactNo = Number(formInputObj.emergencyContactNo);
  //   formInputObj.pinCode = Number(formInputObj.pinCode);
  //   formInputObj.aadharNo = Number(formInputObj.aadharNo);
  // };
  // * handles the onChange foreach input

  const handleChange = (e) => {
    setFormInputObj({ ...formInputObj, [e.target.name]: e.target.value });
  };

  // * Submit the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    // changeToNumber();

    // console.log(formInputObj);
    // // * Convert formObj to formData
    // let formData = new FormData();
    // for (let key in formInputObj) {
    //   formData.append(key, formInputObj[key]);
    // }
    // console.log(formData);
    // postEmployee(formData);
    postEmployee(formInputObj);
  };

  return (
    <React.StrictMode>
      <div className="flex mt-14">
        <Sidebar />

        <section className="w-full md:ml-64 flex-1 p-6 mx-auto bg-white shadow-md dark:bg-gray-800 mt-6">
          <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            Create New User
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
              {/* INPUTS*/}
              {formArray.map((entry) => {
                return (
                  <FormInput
                    key={entry.name}
                    id={entry.id}
                    name={entry.name}
                    label={entry.label}
                    type={entry.type}
                    handleChange={handleChange}
                  />
                );
              })}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </React.StrictMode>
  );
};

export default Form;
