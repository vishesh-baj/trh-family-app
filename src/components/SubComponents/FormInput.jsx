import React from "react";

const FormInput = ({ children }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" for="username">
        {children}
      </label>
      <input id="username" type="text" className="form-input" />
    </div>
  );
};

export default FormInput;
