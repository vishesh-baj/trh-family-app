import { useFormik } from "formik";
import React from "react";
import Sidebar from "./Sidebar";
import * as Yup from "yup";
// import { postUser } from "../app/helpers";

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
      cityTown: "",
      state: "",
      pincode: "",
      permanentAddress: "",
      adhaarNo: "",
      anyOtherIdentity: "",
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

      lastName: Yup.string("last name must be a string")
        .required("last name is required")
        .max(25, "last name cannot be greater that 25 characters")
        .min(3, "last name cannot be less than 3 characters"),

      dateOfBirth: Yup.date("date of birth must be a valid date").required(
        "date of birth is required"
      ),
      fatherFirstName: Yup.string("father's first name must be a string")
        .required("father's first name is required")
        .max(25, "father's first name cannot be larger than 25 characters")
        .min(3, "father's first name cannot be lower than 3 characters"),

      fatherLastName: Yup.string("father's last name must be a string")
        .required("father's last name is required")
        .max(25, "father's last name cannot be larger than 25 characters")
        .min(3, "father's last name cannot be lower than 3 characters"),
      motherName: Yup.string("mother's name must be a string")
        .required("mother's name is required")
        .max(25, "mother's name cannot be larger than 25 characters")
        .min(3, "mother's name cannot be lower than 3 characters"),

      contactNo: Yup.number().required(),

      emergencyContactNo: Yup.number().required(),

      marriedStatus: Yup.string("married status must be a string").required(
        "married status is required"
      ),
      localAddress: Yup.string().required("local address required"),
      cityTown: Yup.string().required("city/town required"),
      state: Yup.string().required("state is required"),
      pincode: Yup.number().required("pincode is required"),
      permanentAddress: Yup.string().required("permanent address required"),
      adhaarNo: Yup.number().required("adhaar number required"),
      anyOtherIdentity: Yup.string(),
      role: Yup.string("Role must be  string").required("role is required"),
      joiningDate: Yup.date("Enter valid date").required(
        "joining date required"
      ),
      workExperience: Yup.string("").required(),
      higherQualification: Yup.string(),
      bloodGroup: Yup.string(),
      profilePicture: Yup.string(),
    }),

    onSubmit: (values) => {
      // Post users
      console.log(values);
      // postUser(values);
    },
  });

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
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                id="lastName"
                type="text"
                className="form-input"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-red-600">{formik.errors.lastName}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth}
                id="dateOfBirth"
                type="date"
                className="form-input"
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                <p className="text-red-600">{formik.errors.dateOfBirth}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.fatherFirstName}
                id="fatherFirstName"
                type="text"
                className="form-input"
              />
              {formik.touched.fatherFirstName &&
              formik.errors.fatherFirstName ? (
                <p className="text-red-600">{formik.errors.fatherFirstName}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.fatherLastName}
                id="fatherLastName"
                type="text"
                className="form-input"
              />
              {formik.touched.fatherLastName && formik.errors.fatherLastName ? (
                <p className="text-red-600">{formik.errors.fatherLastName}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.motherName}
                id="motherName"
                type="text"
                className="form-input"
              />
              {formik.touched.motherName && formik.errors.motherName ? (
                <p className="text-red-600">{formik.errors.motherName}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.contactNo}
                id="contactNo"
                type="number"
                className="form-input"
              />
              {formik.touched.contactNo && formik.errors.contactNo ? (
                <p className="text-red-600">{formik.errors.contactNo}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.emergencyContactNo}
                id="emergencyContactNo"
                type="number"
                className="form-input"
              />
              {formik.touched.emergencyContactNo &&
              formik.errors.emergencyContactNo ? (
                <p className="text-red-600">
                  {formik.errors.emergencyContactNo}
                </p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.marriedStatus}
                id="marriedStatus"
                type="text"
                className="form-input"
              />
              {formik.touched.marriedStatus && formik.errors.marriedStatus ? (
                <p className="text-red-600">{formik.errors.marriedStatus}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.localAddress}
                id="localAddress"
                type="text"
                className="form-input"
              />
              {formik.touched.localAddress && formik.errors.localAddress ? (
                <p className="text-red-600">{formik.errors.localAddress}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.cityTown}
                id="cityTown"
                type="text"
                className="form-input"
              />
              {formik.touched.cityTown && formik.errors.cityTown ? (
                <p className="text-red-600">{formik.errors.cityTown}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.state}
                id="state"
                type="text"
                className="form-input"
              />
              {formik.touched.state && formik.errors.state ? (
                <p className="text-red-600">{formik.errors.state}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.pinCode}
                id="pinCode"
                type="number"
                className="form-input"
              />
              {formik.touched.pincode && formik.errors.pincode ? (
                <p className="text-red-600">{formik.errors.pincode}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.permanentAddress}
                id="permanentAddress"
                type="text"
                className="form-input"
              />
              {formik.touched.permanentAddress &&
              formik.errors.permanentAddress ? (
                <p className="text-red-600">{formik.errors.permanentAddress}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.adhaarNo}
                id="adhaarNo"
                type="text"
                className="form-input"
              />
              {formik.touched.adhaarNo && formik.errors.adhaarNo ? (
                <p className="text-red-600">{formik.errors.adhaarNo}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.anyOtherIdentity}
                id="anyOtherIdentity"
                type="text"
                className="form-input"
              />
              {formik.touched.anyOtherIdenty && formik.errors.anyOtherIdenty ? (
                <p className="text-red-600">{formik.errors.anyOtherIdenty}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.role}
                id="role"
                type="text"
                className="form-input"
              />
              {formik.touched.role && formik.errors.role ? (
                <p className="text-red-600">{formik.errors.role}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.joiningDate}
                id="joiningDate"
                type="date"
                className="form-input"
              />
              {formik.touched.joiningDate && formik.errors.joiningDate ? (
                <p className="text-red-600">{formik.errors.joiningDate}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.workExperience}
                id="workExperience"
                type="text"
                className="form-input"
              />
              {formik.touched.workexperience && formik.errors.workexperience ? (
                <p className="text-red-600">{formik.errors.workexperience}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.higherQualification}
                id="higherQualification"
                type="text"
                className="form-input"
              />
              {formik.touched.higherQualification &&
              formik.errors.higherQualification ? (
                <p className="text-red-600">
                  {formik.errors.higherQualification}
                </p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.bloodGroup}
                id="bloodGroup"
                type="text"
                className="form-input"
              />
              {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                <p className="text-red-600">{formik.errors.bloodGroup}</p>
              ) : null}
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
                onBlur={formik.handleBlur}
                value={formik.values.profilePicture}
                id="profilePicture"
                type="file"
                className="form-input"
              />
              {formik.touched.profilePicture && formik.errors.profilePicture ? (
                <p className="text-red-600">{formik.errors.profilePicture}</p>
              ) : null}
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
