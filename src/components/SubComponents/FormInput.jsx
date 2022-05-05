import React from "react";

const FormInput = ({ onChange, id, type, children, inputValue }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {children}
      </label>
      <input
        onChange={onChange}
        value={inputValue}
        id={id}
        type={type}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
