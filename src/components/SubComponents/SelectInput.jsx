import React from "react";

const SelectInput = ({ options }) => {
  return (
    <div className="flex">
      <div className="mb-3 xl:w-96 flex-1">
        <select
          className="selectRole form-select appearance-none loginInput dark:bg-gray-700"
          aria-label="Default select example"
        >
          <option selected>Select One</option>

          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
