import * as Yup from "yup";

// ** _______________________HELPER-OBJECTS_____________________________

// VALIDATOR OBJECT FOR ADDING NEW EMPLOYEE FORM
export const validatorObj = Yup.object({
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

  contactNo: Yup.number()
    .required()
    .min(10, "enter valid number")
    .max(10, "enter valid number"),

  emergencyContactNo: Yup.number()
    .required()
    .min(10, "enter valid number")
    .max(10, "enter valid number"),

  marriedStatus: Yup.string("married status must be a string").required(
    "married status is required"
  ),
  localAddress: Yup.string().required("local address required"),
  cityTown: Yup.string().required("city/town required"),
  state: Yup.string().required("state is required"),
  pincode: Yup.number().required("pincode is required"),
});

// FROM ARRAY FOR MAPPING INPUTS
export const formArray = [
  {
    id: "1",
    name: "firstName",
    label: "First Name",
    type: "text",
  },
  {
    id: "2",
    name: "lastName",
    label: "Last Name",
    type: "text",
  },
  {
    id: "3",
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "4",
    name: "fatherFirstName",
    label: "Father's First Name",
    type: "text",
  },
  {
    id: "5",
    name: "fatherLastName",
    label: "Father's Last Name",
    type: "text",
  },
  {
    id: "6",
    name: "motherName",
    label: "Mother's Name",
    type: "text",
  },
  {
    id: "7",
    name: "contactNo",
    label: "Contact Number",
    type: "tel",
  },
  {
    id: "8",
    name: "emergencyContactNo",
    label: "Emergency Contact Number",
    type: "tel",
  },
  {
    id: "9",
    name: "marriedStatus",
    label: "Married Status",
    type: "text",
  },
  {
    id: "10",
    name: "localAddress",
    label: "Local Address",
    type: "text",
  },
  {
    id: "11",
    name: "cityOrTown",
    label: "City/Town",
    type: "text",
  },
  {
    id: " 12",
    name: "state",
    label: "State",
    type: "text",
  },
  {
    id: "13",
    name: "pinCode",
    label: "pinCode",
    type: "number",
  },
  {
    id: "14",
    name: "permanentAddress",
    label: "Permanent Address",
    type: "text",
  },
  {
    id: "15",
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "16",
    name: "adhaarNumber",
    label: "Adhaar Number",
    type: "number",
  },
  {
    id: "17",
    name: "anyOtherIdentity",
    label: "Any other identity",
    type: "text",
  },
  {
    id: "18",
    name: "role",
    label: "Role",
    type: "text",
  },
  {
    id: "19",
    name: "joiningDate",
    label: "Joining Date",
    type: "date",
  },
  {
    id: "20",
    name: "workExperience",
    label: "Work Experience",
    type: "text",
  },
  {
    id: "21",
    name: "higherEducation",
    label: "Higher Education",
    type: "text",
  },
  {
    id: "22",
    name: "bloodGroup",
    label: "Blood Group",
    type: "text",
  },
  {
    id: "23",
    name: "profilePicture",
    label: "Profile Picture",
    type: "file",
  },
];
// ** _______________________FUNCTIONS_____________________________

// DARKMODE CONTROLLER FUNCTION
export const triggerDarkMode = (darkmode) => {
  darkmode && document.body.classList.add("dark");
  !darkmode && document.body.classList.remove("dark");
};

// LOCAL STORAGE CHECK FUNCTION
export const checkLocalStorage = () => {
  return localStorage.getItem("token") ? true : false;
};

// FILTER EMPLOYESS ON THE BASIS OF ROLE
export const filterEmployees = (employeesArr) => {
  const devEmployees = employeesArr.filter(
    (employee) => employee.role === "dev"
  );
  const hrEmployees = employeesArr.filter((employee) => employee.role === "hr");

  const salesEmployees = employeesArr.filter(
    (employee) => employee.role === "sales"
  );

  const employeeData = {
    dev: devEmployees,
    hr: hrEmployees,
    sales: salesEmployees,
  };

  return employeeData;
};
