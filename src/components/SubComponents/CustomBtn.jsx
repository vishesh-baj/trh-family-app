import React from "react";

const CustomBtn = ({ btnText }) => {
  return (
    <React.Fragment>
      <button
        type="submit"
        className=" bg-indigo-500 text-center py-4 w-full px-6 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-100 ease-in"
      >
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default CustomBtn;
