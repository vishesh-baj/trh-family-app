import axios from "axios";

// ? LOGIN API
const URL = "https://trh-family.herokuapp.com";
export async function login(userData) {
  axios
    .post(
      `${URL}/login`,
      {
        email: userData.email,
        password: userData.password,
      },
      { "Access-Control-Allow-Origin": "*" }
    )
    .then(function (response) {
      return;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// ? GET ALL EMPLOYEES
export const getAllEmployees = async () => {
  let allEmployees;
  await axios
    .get(`${URL}/employees`, { "Access-Control-Allow-Origin": "*" })
    .then((response) => (allEmployees = response.data.data))
    .catch((err) => console.log(err));

  return allEmployees;
};

// ? POST A NEW EMPLOYEE

export const postEmployee = async (formData) => {
  const headers = {
    "Content-Type": "application/form-data",
    "Access-Control-Allow-Origin": "*",
  };
  let postedEmployee;
  await axios
    .post(`${URL}/addemployee`, formData, headers)
    .then((response) => (postedEmployee = response.data.data))
    .catch((err) => console.log(err));

  return postedEmployee;
};
