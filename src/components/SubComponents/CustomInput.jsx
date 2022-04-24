import React from "react";

const CustomInput = ({ id, type, labelText }) => {
  return (
    <div className="flex flex-col w-auto  gap-3 py-3">
      <label className="text-gray-400 font-light" htmlFor={id}>
        {labelText}
      </label>
      <input
        className="px-2 border-2 border-gray-300  py-4 rounded-lg text-black font-semibold text-md outline-none"
        type={type}
        name=""
        id={id}
      />
    </div>
  );
};

export default CustomInput;
