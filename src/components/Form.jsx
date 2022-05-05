import { useFormik } from "formik";
import React from "react";
import Sidebar from "./Sidebar";
import * as Yup from "yup";
const Form = () => {
  const formik = useFormik({
    initialValues: {
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
      cityTowm: "",
      state: "",
      pincode: "",
      permanentAddress: "",
      adhaarNo: "",
      anyOtherIdenty: "",
      role: "",
      joiningDate: "",
      workexperience: "",
      higherQualification: "",
      bloodGroup: "",
      profilePicture: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string("first name must be string")
        .required("first name is required")
        .max(25, "firstname cannot be larger than 25 characters")
        .min(3, "firstname cannot be lower than 3 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);

  return (
    <div className="flex mt-14">
      <Sidebar />

      <section className="w-full md:ml-64 flex-1 p-6 mx-auto bg-white shadow-md dark:bg-gray-800 mt-6">
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          Create New User
        </h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            {/* First Name */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                id={"firstName"}
                type="text"
                className="form-input"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-red-600">{formik.errors.firstName}</p>
              ) : null}
            </div>

            {/* Last Name */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.lastName}
                id="lastName"
                type="text"
                className="form-input"
              />
            </div>

            {/* Date of Birth */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.dateOfBirth}
                id="dateOfBirth"
                type="date"
                className="form-input"
              />
            </div>

            {/* Father first name */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="fatherFirstName"
              >
                Father's First Name
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.fatherFirstName}
                id="fatherFirstName"
                type="text"
                className="form-input"
              />
            </div>

            {/* Father last name */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="fatherLastName"
              >
                Father's Last Name
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.fatherLastName}
                id="fatherLastName"
                type="text"
                className="form-input"
              />
            </div>

            {/* Mother Name */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="motherName"
              >
                Mother's First Name
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.motherName}
                id="motherName"
                type="text"
                className="form-input"
              />
            </div>

            {/* Contact Number */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="contactNo"
              >
                Contact Number
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.contactNo}
                id="contactNo"
                type="number"
                className="form-input"
              />
            </div>

            {/* Emergency contact number */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emergencyContactNo"
              >
                Emergency Contact Number
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.emergencyContactNo}
                id="emergencyContactNo"
                type="number"
                className="form-input"
              />
            </div>

            {/* Married Status */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="marriedStatus"
              >
                Married Status
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.marriedStatus}
                id="marriedStatus"
                type="text"
                className="form-input"
              />
            </div>

            {/* Local Address */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="localAddress"
              >
                Local Address
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.localAddress}
                id="localAddress"
                type="text"
                className="form-input"
              />
            </div>

            {/* City/Town */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="cityTown"
              >
                City / Town
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.cityTown}
                id="cityTown"
                type="text"
                className="form-input"
              />
            </div>

            {/* State */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="state"
              >
                State
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.state}
                id="state"
                type="text"
                className="form-input"
              />
            </div>

            {/* Pincode */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="pinCode"
              >
                PinCode
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.pinCode}
                id="pinCode"
                type="number"
                className="form-input"
              />
            </div>

            {/* Permanent Address */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="permanentAddress"
              >
                Permanent Address
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.permanentAddress}
                id="permanentAddress"
                type="text"
                className="form-input"
              />
            </div>

            {/* Adhaar Number */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="adhaarNo"
              >
                Adhaar Number
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.adhaarNo}
                id="adhaarNo"
                type="text"
                className="form-input"
              />
            </div>

            {/* Any other identity */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="anyOtherIdentity"
              >
                Any other Identity
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.anyOtherIdentity}
                id="anyOtherIdentity"
                type="text"
                className="form-input"
              />
            </div>

            {/* Role */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="role"
              >
                Role
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.role}
                id="role"
                type="text"
                className="form-input"
              />
            </div>

            {/* Joining Date */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="joiningDate"
              >
                Joining Date
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.joiningDate}
                id="joiningDate"
                type="date"
                className="form-input"
              />
            </div>

            {/* Work experience */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="workExperience"
              >
                Work Experience
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.workExperience}
                id="workExperience"
                type="text"
                className="form-input"
              />
            </div>

            {/* Higher Qualification */}
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="higherQualification"
              >
                Higher Qualification
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.higherQualification}
                id="higherQualification"
                type="text"
                className="form-input"
              />
            </div>

            {/* Blood group */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="bloodGroup"
              >
                Blood Group
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.bloodGroup}
                id="bloodGroup"
                type="text"
                className="form-input"
              />
            </div>

            {/* Profile Picture */}

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="profilePicture"
              >
                Profile Picture
              </label>
              <input
                onChange={formik.handleChange}
                value={formik.values.profilePicture}
                id="profilePicture"
                type="file"
                className="form-input"
              />
            </div>
          </div>

          {/* Submit button */}
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
  );
};

export default Form;
