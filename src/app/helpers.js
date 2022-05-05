import axios from "axios";
import { serialize } from "object-to-formdata";
// LOGIN API
export async function login(userData) {
  console.log(userData);
  axios
    .post("http://localhost:8081/login", {
      email: userData.email,
      password: userData.password,
    })
    .then(function (response) {
      console.log(response.data.data.email);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// FAKE AUTH KEY
export const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("2342f2f1d131rf12"), 250);
  });

// DARKMODE CONTROLLER FUNCTION

export const triggerDarkMode = (darkmode) => {
  darkmode && document.body.classList.add("dark");
  !darkmode && document.body.classList.remove("dark");
};

// convert to formdata
export const jsonToFormData = (jsonObj) => {
  // let formData = new FormData();

  // for (const key in jsonObj) {
  //   formData.append(key, jsonObj[key]);
  // }
  const formData = serialize(jsonObj);

  console.log(formData);

  return formData;
};
