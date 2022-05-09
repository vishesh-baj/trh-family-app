import React from "react";

const FormInput = ({ id, name, label, type, handleChange }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        id={id}
        name={name}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
