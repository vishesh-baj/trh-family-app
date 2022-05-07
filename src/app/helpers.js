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
