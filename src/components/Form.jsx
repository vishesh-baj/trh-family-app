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
            {Object.keys(formik.values).map((val) => {
              return (
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="firstName"
                  >
                    {val.toUpperCase()}
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
              );
            })}
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
