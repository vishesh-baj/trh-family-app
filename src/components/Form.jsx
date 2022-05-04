import React, { useState } from "react";
import Sidebar from "./Sidebar";
import FormInput from "./SubComponents/FormInput";

const Form = () => {
  const [submittedData, setSubmittedData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    fatherFirstName: "",
    fatherLastName: "",
    motherName: "",
    contactNo: null,
    emergencyContactNo: null,
    marriedStatus: "",
    localAddress: "",
    cityOrTown: "",
    state: "",
    pinCode: null,
    permanentAddress: "",
    email: "",
    adhaarNo: null,
    anyOtherIdenty: "",
    role: "",
    joiningData: "",
    workExperience: "",
    higherQualification: "",
    bloodGroup: "",
    profile_picture: "",
  });

  return (
    <div className="flex mt-14">
      <Sidebar />

      <section className="w-full md:ml-64 flex-1 p-6 mx-auto bg-white shadow-md dark:bg-gray-800 mt-6">
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          Create New User
        </h1>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <FormInput type="text" name="firstName">
              First Name
            </FormInput>
            <FormInput type="text" name="lastname">
              Last Name
            </FormInput>
            <FormInput type="date" name="department">
              Date of Birth
            </FormInput>
            <FormInput type="type" name="father-name-first">
              Father First Name
            </FormInput>
            <FormInput name="father-name-last">Father Last Name</FormInput>
            <FormInput name="mother-name">Mother Name</FormInput>
            <FormInput type="phone" name="contactnumber">
              Contact Number
            </FormInput>
            <FormInput type="phone" name="emergency-contact-number">
              Emergency Contact Number
            </FormInput>
            <FormInput name="Married">Married Status</FormInput>
            <FormInput name="Local Address">Local Address</FormInput>
            <FormInput name="City/Town">City/Town</FormInput>
            <FormInput name="State">State</FormInput>
            <FormInput name="PinCode">Pincode</FormInput>
            <FormInput name="Permanant Address">Permanant Address</FormInput>
            <FormInput name="Adhaar Card">Adhaar Number</FormInput>
            <FormInput name="Any other Identy">Any other identity</FormInput>
            <FormInput name="Department">Department</FormInput>
            <FormInput type="date" name="Joining Date">
              Joining Date
            </FormInput>
            <FormInput type="number" name="Work Experience">
              Work Experience
            </FormInput>
            <FormInput name="contactnumber">Higher Qualification</FormInput>
            <FormInput name="contactnumber">Blood Group</FormInput>
            <FormInput name="contactnumber">Profile Picture</FormInput>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-6 py-2 leading-5 w-1/2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
