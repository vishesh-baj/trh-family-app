import React from "react";

const FormInput = ({ name }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor="input">
        {name}
      </label>
      <input className="form-input" type="text" autoComplete="off" />
    </div>
  );
};

export default FormInput;
