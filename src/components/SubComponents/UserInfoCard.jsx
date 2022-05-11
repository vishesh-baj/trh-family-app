import React from "react";
const UserInfoCard = ({ entry1, entry2 }) => {
  return (
    <React.Fragment>
      <div className="pt-5 flex justify-between  gap-10">
        <h1 className=" text-sm md:text-md text-teal-400  ">{entry1}: </h1>
        <h1 className="text-sm md:text-md dark:text-white  ">{entry2}</h1>
      </div>
    </React.Fragment>
  );
};

export default UserInfoCard;
