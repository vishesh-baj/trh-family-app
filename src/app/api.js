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
      return response;
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

// ? POST A NEW EMPLOYEE
export const postEmployee = async (postData) => {
  var imagedata = document.querySelector('input[type="file"]').files[0];

  let formData = new FormData();
  let keys = Object.keys(postData);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "profilePicture") {
      formData.append("file", imagedata);
    } else {
      formData.append(keys[i], postData[keys[i]]);
    }
  }

  let baseUrl = "https://trh-family.herokuapp.com/";
  let url = baseUrl + "addemployee";
  axios({
    method: "POST",
    url: url,
    data: formData,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// ? EDIT AN EMPLOYEE
export const editEmployee = async (employeeID, payload) => {
  let data;
  const headers = { "Content-Type": "application/json, multipart/form-data" };
  await axios
    .put(`${URL}/employee/${employeeID}`, payload, headers)
    .then((res) => (data = res.data.data));

  console.log(data);

  return data;
};

//  ? DELETE AN EMPLOYEE
export const deleteEmployee = (employeeId) => {
  axios({
    method: "delete",
    url: `https://trh-family.herokuapp.com/employee/${employeeId}`,
    header: "",
    data: "",
  })
    .then((response) => {
      console.log(response);
      // window.location.reload(false);
      //  after delete call again get data api
    })
    .catch((error) => {
      console.log(error);
    });
};

// ? GET ALL STATES

export const getAllStates = async () => {
  const headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");

  await axios
    .get("https://api.countrystatecity.in/v1/countries", headers)
    .then((res) => res.data.data);
};
