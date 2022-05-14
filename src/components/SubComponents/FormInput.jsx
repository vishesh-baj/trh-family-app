import React from "react";
import { useSelector } from "react-redux";
import { selectOtherIdentity, selectRole } from "../../app/helpers";
import OtherIdentitySelect from "./OtherIdentitySelect";
import SelectInput from "./SelectInput";
import StatesSelected from "./StatesSelect";

const FormInput = ({ id, name, label, type, handleChange, defaultValue }) => {
  const states = useSelector((state) => state.states);
  return (
    <div>
      <label className="text-gray-700 dark:text-gray-200" htmlFor={id}>
        {label}
      </label>

      {type === "select" ? (
        (name === "role" && <SelectInput options={selectRole} />) ||
        (name === "anyOtherIdentity" && (
          <OtherIdentitySelect options={selectOtherIdentity} />
        )) ||
        (name === "state" && <StatesSelected options={states} />)
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
