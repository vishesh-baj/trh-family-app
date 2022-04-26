import React from "react";

const FormInput = ({ id, type, children }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" for={id}>
        {children}
      </label>
      <input id={id} type={type} className="form-input" />
    </div>
  );
};

export default FormInput;
