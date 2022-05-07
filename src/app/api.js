import axios from "axios";

// ? LOGIN API
const URL = "https://trh-family.herokuapp.com";
export async function login(userData) {
  axios
    .post(`${URL}/login`, {
      email: userData.email,
      password: userData.password,
    })
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
    .get(`${URL}/employees`)
    .then((response) => (allEmployees = response.data.data))
    .catch((err) => console.log(err));

  return allEmployees;
};
