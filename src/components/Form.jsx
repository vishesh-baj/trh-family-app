import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      // dateOfBirth: "",
      // fatherFirstName: "",
      // fatherLastName: "",
      // motherName: "",
      // contactNo: null,
      // emergencyContactNo: null,
      // marriedStatus: "",
      // localAddress: "",
      // cityOrTown: "",
      // state: "",
      // pinCode: null,
      // permanentAddress: "",
      // email: "",
      // adhaarNo: null,
      // anyOtherIdenty: "",
      // role: "",
      // joiningData: "",
      // workExperience: "",
      // higherQualification: "",
      // bloodGroup: "",
      // profile_picture: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, "Max characters 25")
        .required("Required"),
      lastName: Yup.string().max(25, "Max Characters 25"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // const [submittedData, setSubmittedData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   dateOfBirth: "",
  //   fatherFirstName: "",
  //   fatherLastName: "",
  //   motherName: "",
  //   contactNo: null,
  //   emergencyContactNo: null,
  //   marriedStatus: "",
  //   localAddress: "",
  //   cityOrTown: "",
  //   state: "",
  //   pinCode: null,
  //   permanentAddress: "",
  //   email: "",
  //   adhaarNo: null,
  //   anyOtherIdenty: "",
  //   role: "",
  //   joiningData: "",
  //   workExperience: "",
  //   higherQualification: "",
  //   bloodGroup: "",
  //   profile_picture: "",
  // });
  console.log(formik.values);

  return (
    <div className="flex mt-14">
      <Sidebar />

      <section className="w-full md:ml-64 flex-1 p-6 mx-auto bg-white shadow-md dark:bg-gray-800 mt-6">
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          Create New User
        </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 "
        >
          {/* First Name */}
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="input">
              First Name
            </label>
            <input
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="form-input"
              type="text"
              autoComplete="off"
            />
            {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="input">
              Last Name
            </label>
            <input
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="form-input"
              type="text"
              autoComplete="off"
            />
          </div>

          {/* EMAIL */}

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="input">
              Email
            </label>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="form-input"
              type="text"
              autoComplete="off"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 w-1/2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
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
