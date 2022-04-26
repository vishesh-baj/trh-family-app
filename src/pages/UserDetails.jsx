import React from "react";
import { useSelector } from "react-redux";
import UserInfoCard from "../components/SubComponents/UserInfoCard";
const UserDetails = () => {
  const user = useSelector((state) => state.selectedUser);

  return (
    <React.Fragment>
      <div className="mt-36">
        <UserInfoCard user={user} />
      </div>

      {/* <div className="container mt-28 mx-auto flex flex-col gap-5 justify-start px-5 ">
        <div className=" px-5 py-2 w-auto rounded-lg bg-gray-50 shadow-md flex gap-10  ">
          <h1 className="text-2xl">First Name: </h1>
          <h1 className="text-2xl">{user.first_name}</h1>
        </div>

        <div className=" px-5 py-2 w-auto rounded-lg bg-gray-50 shadow-md flex gap-10  ">
          <h1 className="text-2xl">Last Name: </h1>
          <h1 className="text-2xl">{user.last_name}</h1>
        </div>

        <div className=" px-5 py-2 w-auto rounded-lg bg-gray-50 shadow-md flex gap-10  ">
          <h1 className="text-2xl">Role: </h1>
          <h1 className="text-2xl">{user.role}</h1>
        </div>

        <div className=" px-5 py-2 w-auto rounded-lg bg-gray-50 shadow-md flex gap-10  ">
          <h1 className="text-2xl">Contact: </h1>
          <h1 className="text-2xl">{user.contact_no}</h1>
        </div>
      </div> */}

      <div className="container mx-auto flex"></div>
    </React.Fragment>
  );
};

export default UserDetails;
