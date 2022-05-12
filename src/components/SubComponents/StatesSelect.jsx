import React from "react";

const StatesSelected = ({ options }) => {
  return (
    <>
      <div className="flex">
        <div className="mb-3 xl:w-96 flex-1">
          <select
            className="selectOtherIdentity form-select appearance-none loginInput dark:bg-gray-700"
            aria-label="Default select example"
          >
            <option selected>Select One</option>

            {options.map((option) => {
              return (
                <option defaultChecked={option.name[0]}>{option.name}</option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default StatesSelected;
