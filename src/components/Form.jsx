import React from "react";
import Sidebar from "./Sidebar";
import FormInput from "./SubComponents/FormInput";

const Form = () => {
  return (
    <div className="flex mt-14">
      <Sidebar />

      <section className="w-full md:ml-64 flex-1 p-6 mx-auto bg-white shadow-md dark:bg-gray-800 mt-6">
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          Create New User
        </h1>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <FormInput type="text" id="firstname">
              First Name
            </FormInput>
            <FormInput type="text" id="lastname">
              Last Name
            </FormInput>
            <FormInput type="date" id="department">
              Date of Birth
            </FormInput>
            <FormInput type="type" id="father-name-first">
              Father First Name
            </FormInput>
            <FormInput id="father-last-name">Father Last Name</FormInput>
            <FormInput id="mother-name">Mother Name</FormInput>
            <FormInput type="phone" id="contactnumber">
              Contact Number
            </FormInput>
            <FormInput type="phone" id="emergency-contact-number">
              Emergency Contact Number
            </FormInput>
            <FormInput id="contactnumber">Married Status</FormInput>
            <FormInput id="contactnumber">Local Address</FormInput>
            <FormInput id="contactnumber">City/Town</FormInput>
            <FormInput id="contactnumber">State</FormInput>
            <FormInput id="contactnumber">Pincode</FormInput>
            <FormInput id="contactnumber">Permanant Address</FormInput>
            <FormInput id="contactnumber">Adhaar Number</FormInput>
            <FormInput id="contactnumber">Any other Identity</FormInput>
            <FormInput id="contactnumber">Department</FormInput>
            <FormInput type="date" id="contactnumber">
              Joining Date
            </FormInput>
            <FormInput type="number" id="contactnumber">
              Work Experience
            </FormInput>
            <FormInput id="contactnumber">Higher Qualification</FormInput>
            <FormInput id="contactnumber">Blood Group</FormInput>
            <FormInput id="contactnumber">Profile Picture</FormInput>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;
