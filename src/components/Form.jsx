// import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postEmployee } from "../app/api";
import { formArray } from "../app/helpers";
import Sidebar from "./Sidebar";
import FormInput from "./SubComponents/FormInput";

const Form = () => {
  // const navigate = useNavigate();
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

  // * handles the onChange for each input

  const handleChange = (e) => {
    setFormInputObj({ ...formInputObj, [e.target.name]: e.target.value });
  };

  // * Submit the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const select = document.querySelector(".selectRole").value;
    const selectOtherDetails = document.querySelector(
      ".selectOtherIdentity"
    ).value;
    formInputObj.role = select;
    formInputObj.anyOtherIdentity = selectOtherDetails;
    console.log(formInputObj);
    postEmployee(formInputObj);
  };

  return (
    <div className="flex mt-20">
      <Sidebar />

      <section className="w-full font-primaryFont md:ml-64 flex-1 p-6 mx-auto bg-white shadow-md dark:bg-gray-800 ">
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          Create New Employee
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
              // onClick={() => navigate("/dashboard")}
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
