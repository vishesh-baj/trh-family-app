import React from "react";
import { selectOtherIdentity, selectRole } from "../../app/helpers";
import OtherIdentitySelect from "./OtherIdentitySelect";
import SelectInput from "./SelectInput";

const FormInput = ({ id, name, label, type, handleChange, defaultValue }) => {
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {label}
      </label>

      {type === "select" ? (
        (name === "role" && <SelectInput options={selectRole} />) ||
        (name === "anyOtherIdentity" && (
          <OtherIdentitySelect options={selectOtherIdentity} />
        ))
      ) : (
        <input
          className="form-input"
          id={id}
          name={name}
          type={type}
          onChange={handleChange}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};

export default FormInput;
