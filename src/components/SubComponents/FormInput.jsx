import React from "react";

const FormInput = () => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor="firstName">
        First Name
      </label>

      <input id="firstName" type="text" className="form-input" />
    </div>
  );
};

export default FormInput;
